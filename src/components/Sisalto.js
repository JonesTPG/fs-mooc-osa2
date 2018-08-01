import React from 'react'
import Osa from './Osa'

const Sisalto = ({osat}) => {
    
    const yhteensa = () => {
        let tehtavienMaara = osat.reduce((tehtavienMaara, osa) => tehtavienMaara + osa.tehtavia, 0)
        return tehtavienMaara
    }
    
    return (
      <div>
      
      {osat.map(rivi => <Osa key={rivi.id} osa={rivi.nimi} tehtavia={rivi.tehtavia}/>)}
      <p> yhteensä {yhteensa()} tehtävää </p>
      </div>
    )
  }




 
export default Sisalto

