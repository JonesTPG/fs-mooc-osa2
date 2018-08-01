import React from 'react'
import Osa from './Osa'

const Sisalto = ({osat}) => {
    
    return(
      <div>
      
      {osat.map(rivi => <Osa key={rivi.id} osa={rivi.nimi} tehtavia={rivi.tehtavia}/>)}
       
      </div>
    )
  }




 
export default Sisalto

