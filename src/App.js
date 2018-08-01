import React from 'react'
import Kurssi from './components/Kurssi'
import Otsikko from './components/Otsikko'
import Sisalto from './components/Sisalto'
import Osa from './components/Osa'






const App = () => {

  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      }
     
    ]
  }

  return (
    <div>
      <Kurssi kurssi={kurssi} />
     
    </div>
  )
}

export default App