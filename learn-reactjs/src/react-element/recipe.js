import React from 'react'
import Ingredient from './Ingredient'
import data from './data'
import PropTypes from 'prop-types'
import RefForm from './ref'

const Summary = ({ recipes, title }) => (
  <div className='summary'>
    <h1>{title}</h1>
    {recipes.map((recipe, i) => (
      <p key={i}>
        <span>{recipe.name}: </span>
        <span>{recipe.ingredients.length} Ingredients</span> |
        <span>{recipe.steps.length} Steps</span>
      </p>
    ))}
  </div>
)

Summary.propTypes = {
  recipes: PropTypes.array.isRequired,
}

const Recipe = ({ name, ingredients, steps }) => (
  <section id={name.toLowerCase().replace(/ /g, '-')}>
    <h1>{name}</h1>
    <ul className='ingredients'>
      {ingredients.map((ingredient, i) => (
        <Ingredient key={i} {...ingredient} />
      ))}
    </ul>

    <Instruction title='Cooking Instructions' steps={steps} />
  </section>
)

const Instruction = ({ title, steps }) => (
  <section className='instructions'>
    <h2>{title}</h2>
    {steps.map((step, i) => (
      <p key={i}>{step}</p>
    ))}
  </section>
)

const Menu = ({ recipes, title }) => (
  <article>
    <header>
      <h1>{title}</h1>
    </header>
    <div className='recipes'>
      {recipes.map((recipe, i) => (
        <Recipe
          key={i}
          name={recipe.name}
          ingredients={recipe.ingredients}
          steps={recipe.steps}
        />
      ))}
    </div>
  </article>
)

export function Recipes() {
  return (
    <div>
      <Summary recipes={data} title='summary' />
      <RefForm
        onNewColor={(title, color) => {
          console.log(`TODO: add new ${title} and ${color} to the list`)
          console.log(`TODO: render UI with new Color`)
        }}
      />
      <hr />
      <Menu recipes={data} title='Delicious Recipes' />
    </div>
  )
}
