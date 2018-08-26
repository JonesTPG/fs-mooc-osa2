import React from 'react'


const Countrydata = ({ name, capital, population, flag}) => {

return (
   
   <div>
    <h2>{name}</h2>
    <p>capital: {capital}</p>
    <p>population: {population}</p>
    <img height="250px" width="400px" src={flag} alt={name}/>
   </div>
  )
}


export default Countrydata