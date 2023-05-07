import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RecipesScreen } from '../../features/recipes/screen'
import { LoginScreen } from '../../features/login/screen'
import { RecipeDetailScreen } from '../../features/recipe/detail-screen'

const Stack = createNativeStackNavigator<{
  login: undefined
  recipes: undefined
  'recipe-detail': {
    id: string
  }
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="recipes"
        component={RecipesScreen}
        options={{
          title: 'Recipes',
        }}
      />
      <Stack.Screen
        name="recipe-detail"
        component={RecipeDetailScreen}
        options={{
          title: 'Recipe',
        }}
      />
    </Stack.Navigator>
  )
}
