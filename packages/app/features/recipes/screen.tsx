import {useEffect, useState} from "react";
import {H1, P, Text, Image} from 'app/design/typography'
import {SafeAreaView, ScrollView, Row} from 'app/design/layout'
import {View} from 'app/design/view'
import {recipes as mobileFallbackRecipes} from '../../../../data'
import {MotiLink} from 'solito/moti'
import axios from "axios";
import {RecipeType} from "../../types";


export function RecipesScreen() {

  const [recipes, setRecipes] = useState<RecipeType[]>([])

  // react native accepts calls to HTTPS APIs only, so populate data from file as fallback
  useEffect(() => {
    axios.get('http://localhost:3000/api/recipes')
      .then((response: any) => setRecipes(response.data))
      .catch((error: any) => setRecipes(mobileFallbackRecipes as unknown as RecipeType[]))

  }, [])

  // @ts-ignore
  return (
    <View className="scroll-auto flex-1 items-center justify-center p-3 bg-gray-50">
      <SafeAreaView>
        <ScrollView>
          <H1 className="text-center text-gray-600">Delicious recipes</H1>
          <View className="">
            <P className="text-center text-gray-600">
              Welcome to recipes library. Please, pick a meal you like and we will help you to cook it.
            </P>
          </View>
          <View className="scroll-auto"/>

          <Row className="grid xs:grid-cols-1 xs:gap-2 md:grid-cols-2 md:gap-2 xl:grid-cols-3 xl:gap-3">
            {
              recipes.map((item: RecipeType, index) => (

                <View key={index} className="flex py-4 px-1 ">


                  <MotiLink
                    href={`/recipe/${item.recipeId}`}
                    animate={({hovered, pressed}) => {
                      'worklet'

                      return {
                        scale: pressed ? 0.95 : hovered ? 1.1 : 1,
                        // rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
                      }
                    }}
                    transition={{
                      type: 'timing',
                      duration: 150,
                    }}
                  >
                    <Image className="w-[400px] h-[400px] rounded-md"
                           source={{
                             uri: item.imageUrl
                           }}
                    />
                    <Text selectable={false} className="text-base font-bold text-gray-700">
                      {item.recipeName}
                    </Text>
                  </MotiLink>
                </View>
              ))
            }

          </Row>
        </ScrollView>
      </SafeAreaView>
    </View>

  )
}
