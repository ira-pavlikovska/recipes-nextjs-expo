import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'

export function LoginScreen() {
  return (
    <View className="flex-1 items-center justify-center p-3">
      <H1>Login</H1>
        <MotiLink
            href="/recipes"
            animate={({ hovered, pressed }) => {
                'worklet'

                return {
                    scale: pressed ? 0.95 : hovered ? 1.1 : 1,
                    rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
                }
            }}
            transition={{
                type: 'timing',
                duration: 150,
            }}
        >
            <Text selectable={false} className="text-base font-bold">
                Moti Login
            </Text>
        </MotiLink>

    </View>
  )
}
