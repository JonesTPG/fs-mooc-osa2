import React from 'react';
import Itemsearch from './components/Itemsearch'
import Itemdata from './components/Itemdata'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  addItem = (event) => {
    event.preventDefault()
    
    let nimiLista = this.state.persons.map(rivi => rivi.name)
    if ( nimiLista.includes(this.state.newName) ) {
      alert("Nimi on jo listassa!")
      this.setState({newName: '',
                     newNumber: ''})
      return
    }

    const nameObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }
    const persons = this.state.persons.concat(nameObject)
  
    this.setState({
      persons: persons,
      newName: '',
      newNumber: ''
    })
  }

  handeNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handeNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  handeFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  }

  showNumbers = () => {
    if ( this.state.filter === '' ) {
    return this.state.persons.map(rivi =>  <Itemdata key={rivi.name} name={rivi.name} number={rivi.number}/>)
    }
 
    else {
      const nimiLista = this.state.persons.filter(rivi => rivi.name.toLowerCase().startsWith(this.state.filter.toLowerCase()))
      return nimiLista.map(rivi =>  <Itemdata key={rivi.name} name={rivi.name} number={rivi.number}/>) 
    }
  }

  render() {
    return (
      <div>
        <Itemsearch/>
        <input value={this.state.filter}
               onChange={this.handeFilterChange} />
        <h2>Lisää uusi</h2>
        <form onSubmit={this.addItem}>
          <div>
            nimi: <input value={this.state.newName}
                          onChange={this.handeNameChange} />
            <br/>
            numero: <input value={this.state.newNumber}
                          onChange={this.handeNumberChange} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <div>{this.showNumbers()}</div>
      </div>
    )
  }
}
export default App