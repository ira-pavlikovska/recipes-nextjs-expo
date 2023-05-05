import { useState } from 'react'
import { A, H1, P, Text, TextLink, TextInput, Button } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'
import { useRouter } from 'solito/router'

export function LoginScreen() {
    const { push } = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        push('/recipes')
    }

    return (
    <View className="flex-1 items-center justify-center px-16 bg-gray-50">
      <H1>Login</H1>
        <Row className="p-2">
            <TextInput
                value={email}
                onChangeText={(value) => setEmail(value)}
                placeholder="email"
            />
        </Row>
        <Row className="p-2">
            <TextInput
                value={password}
                onChangeText={(value) => setPassword(value)}
                placeholder="password"
            />
        </Row>
        <Row className="p-2">
            <Button
                onPress={handleLogin}
                title={"Login"}
                color={"#6b7280"}
            />
        </Row>

    </View>
  )
}
