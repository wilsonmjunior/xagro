import 'react-native-reanimated';

import { useEffect } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TamaguiProvider } from '@tamagui/core';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import { tamaguiConfig } from '../config/tamagui.config';

export {
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

function Routes () {
  return (
    <Stack
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)"  />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  )
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Regular.otf"),
    InterMedium: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Routes />
    </TamaguiProvider>
  );
}
