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
          <H1>Delicious recipes</H1>
          <View className="max-w-xl">
            <P className="text-center">
              Here is a basic starter to show you how you can navigate from one
              screen to another. This screen uses the same code on Next.js and React
              Native.
            </P>
          </View>
          <View className="scroll-auto"/>

          <Row className="">
            {
              recipes.map((item: RecipeType, index) => (

                <View key={index} className="flex py-4 px-1">


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
                    <Image className="w-[400px] h-[400px]"
                           source={{
                             uri: item.imageUrl
                           }}
                    />
                    <Text selectable={false} className="text-base font-bold">
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
