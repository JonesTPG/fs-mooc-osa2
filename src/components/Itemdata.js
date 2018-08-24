import React from 'react'
import App from '../App'


const Itemdata = ({ name, number}) => {

return (
   
   <div>  
   <p key={name}> {name} {number}  <br/></p>
   </div>
  )
}


export default Itemdata