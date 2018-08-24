import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  addNumber = (event) => {
    event.preventDefault()
    
    let nimiLista = this.state.persons.map(rivi => rivi.name)
    if ( nimiLista.includes(this.state.newName) ) {
      alert("Nimi on jo listassa!")
      this.setState({newName: ''})
      return
    }

    const nameObject = {
      name: this.state.newName,
    }
    const persons = this.state.persons.concat(nameObject)
  
    this.setState({
      persons: persons,
      newName: ''
    })
  }

  handeNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addNumber}>
          <div>
            nimi: <input value={this.state.newName}
                          onChange={this.handeNameChange} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        {this.state.persons.map(rivi =>  <p key={rivi.name}> {rivi.name} <br/></p>)}
      </div>
    )
  }
}

export default App