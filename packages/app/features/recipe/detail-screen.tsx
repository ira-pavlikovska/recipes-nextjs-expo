import { createParam } from 'solito'
import {SafeAreaView, ScrollView} from 'app/design/layout'
import {Image, Text} from 'app/design/typography'
import { View } from 'app/design/view'
import {useEffect, useState} from "react";
import {Ingredient, RecipeType} from "../../types";
import axios from "axios";
import {recipes as mobileFallbackRecipes} from "../../../../data";
import {MotiLink} from "solito/moti";

const { useParam } = createParam<{ id: string }>()

export function RecipeDetailScreen() {
  const [id] = useParam('id')

  const [recipe, setRecipe] = useState<RecipeType>()

  // react native accepts calls to HTTPS APIs only, so populate data from file as fallback
  useEffect(() => {
    axios.get(`http://localhost:3000/api/recipe/${id}`)
      .then((response: any) => setRecipe(response.data))
      .catch((error: any) => setRecipe(mobileFallbackRecipes.filter((recipe) => recipe.recipeId === id)[0] as unknown as RecipeType))

  }, [])

  if (!recipe) return <View />

  return (
    <View className="items-center">
      <SafeAreaView>
        <ScrollView>
          <Text className="m-4 text-center font-bold text-base text-gray-700">{recipe.recipeName}</Text>

          <View className="items-center">
            <Image className="w-[400px] h-[400px] rounded-md"
                   source={{
                     uri: recipe.imageUrl
                   }}
            />
          </View>

          <Text className="m-4 text-center font-bold text-base text-gray-600">Ingredients</Text>

          <View className="px-10 items-start">
            {
              recipe.ingredients.map((ingredient: Ingredient, index: number) => (
                <Text key={index} className="text-base text-gray-600"> - {ingredient.name}</Text>
              ))
            }
          </View>

          <Text className="m-4 text-center font-bold text-base text-gray-600">Instructions</Text>
          <View className="px-10 items-start">
            {
              recipe.instructions.map((instruction: string, index: number) => (
                <Text key={index} className="text-base text-gray-600"> - {instruction}</Text>
              ))
            }
          </View>

          <View className="py-10 items-center">
            <MotiLink
              href={`/recipes`}
              animate={({hovered, pressed}) => {
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
              <Text selectable={false} className="text-base font-bold text-gray-700">
                👈 Back to recipes
              </Text>
            </MotiLink>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}
