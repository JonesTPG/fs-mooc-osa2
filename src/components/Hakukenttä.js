import React from 'react'
import App from '../App'


const Hakukenttä = ( { lista }) => {






    return (
   
   <div>
        
    
   {lista.map(rivi =>  <p key={rivi.name} >{rivi.name} </p>)}
   </div>
  )
}


export default Hakukenttä