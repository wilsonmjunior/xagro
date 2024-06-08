import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Button,
  Input,
  View,
  XStack,
} from 'tamagui';
import { Icon } from '../components/common/Icon';
import { Eye } from 'phosphor-react-native';

function useSignIn() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  return {
    status: status,
    signIn: () => {
      setStatus('loading')
      setTimeout(() => {
        setStatus('success')
      }, 2000)
    },
  }
}

export default function SignInScreen() {
  const { signIn, status } = useSignIn()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View flex={1} justifyContent='center' mx={16} gap={12}>
        <View flexDirection="row" bg="white" borderWidth={1} borderColor="#CFD5DB" borderRadius={8} p={10}>
          <Input unstyled flex={1} placeholder="Email" bg="white" color="black" /> 
          <Button icon={Eye} bg="white" hoverStyle={{ bg: 'white' }}/> 
        </View>
        <Input size="$md" placeholder="Senha" bg="white" color="black" borderColor="#CFD5DB" />

        <Button size="$md" bg="$primary500">Entrar</Button>
      </View>
    </SafeAreaView>
  )
}
