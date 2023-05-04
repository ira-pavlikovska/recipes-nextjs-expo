import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { Text } from 'app/design/typography'
import { View } from 'app/design/view'

const { useParam } = createParam<{ id: string }>()

export function RecipeDetailScreen() {
  const [id] = useParam('id')

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-4 text-center font-bold">{`Recipe ID: ${id}`}</Text>
      <TextLink href="/recipes">👈 Go Recipes</TextLink>
    </View>
  )
}
