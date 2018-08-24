import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas',
          number: '112' }
      ],
      newName: '',
      newNumber: ''
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

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
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
        {this.state.persons.map(rivi =>  <p key={rivi.name}> {rivi.name} {rivi.number}<br/></p>)}
      </div>
    )
  }
}

export default App