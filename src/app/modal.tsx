import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Text, View } from 'tamagui';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} borderColor="#eee" />

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});