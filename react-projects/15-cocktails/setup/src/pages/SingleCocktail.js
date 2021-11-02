import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  let { idDrink } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    const loadData = async () => {
      try {
        let response = await fetch(url + idDrink)
        let data = await response.json()
        if (data.drinks) {
          const {
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strCategory,
            strGlass,
            strInstructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktail = {
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            category: strCategory,
            glass: strGlass,
            instructions: strInstructions,
            ingredients: ingredients,
          }
          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
      } catch (err) {
        // alert(err)
        setLoading(false)
      }
      setLoading(false)
    }
    loadData()
  }, [idDrink])

  if (loading) {
    return <Loading />
  }

  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  } else {
    return (
      <section className=' section cocktail-section'>
        <div>
          <Link to='/' className='btn btn-primary'>
            Back Home
          </Link>
          <h4 className='section-title'>{cocktail.name}</h4>
        </div>
        <div className='drink'>
          <img src={cocktail.image} alt='' />
          <div className='drink-info'>
            <p>
              <span className='drink-data'>Name :</span>
              {cocktail.name}
            </p>
            <p>
              <span className='drink-data'>Category :</span>
              {cocktail.category}
            </p>
            <p>
              <span className='drink-data'>Info :</span>
              {cocktail.info}
            </p>
            <p>
              <span className='drink-data'>Glass :</span>
              {cocktail.glass}
            </p>
            <p>
              <span className='drink-data'>Instructons :</span>
              {cocktail.instructions}
            </p>
            <p>
              <span className='drink-data'>Ingredients :</span>
              {cocktail.ingredients.map((ingre, index) => {
                return <span key={index}>{ingre} </span>
              })}
            </p>
          </div>
        </div>
      </section>
    )
  }
}
export default SingleCocktail
