import { recipes } from '../../../../../data'

export default function handler({ query: { id } }, res) {

  const filtered = recipes.filter((recipe) => recipe.recipeId === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Recipe with the id of ${id} is not found` })
  }
}
