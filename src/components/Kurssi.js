import React from 'react'
import Otsikko from './Otsikko'
import Sisalto from './Sisalto'
import Osa from './Osa'
import App from '../App'


const Kurssi = ({kurssi}) => {
    return (
   
   <div>
   <Otsikko nimi={kurssi.nimi}/>

   <Sisalto osat={kurssi.osat}/>
   </div>
  )
}




 
 
export default Kurssi


