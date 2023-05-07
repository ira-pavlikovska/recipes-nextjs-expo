export type Ingredient = {
  name: string
  quantity: string
}

export type RecipeType = {
  recipeId: string
  userId: string
  recipeName: string
  imageUrl: string
  ingredients: Ingredient[]
  instructions: string[]
}
