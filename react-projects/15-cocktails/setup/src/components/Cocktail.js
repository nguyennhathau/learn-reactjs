import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({
  idDrink,
  strDrink,
  strCategory,
  strAlcoholic,
  strDrinkThumb,
}) => {
  return (
    <li className='cocktail'>
      <img src={strDrinkThumb} alt='' />
      <div className='cocktail-footer'>
        <h3>{strDrink}</h3>
        <h4>{strCategory}</h4>
        <p>{strAlcoholic}</p>
        <Link
          className='btn btn-primary btn-details'
          to={`cocktail/${idDrink}`}
        >
          Details
        </Link>
      </div>
    </li>
  )
}

export default Cocktail
