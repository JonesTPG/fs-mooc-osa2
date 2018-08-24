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
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  render() {
    return (
      <div>
        <div>
          debug: {this.state.newName}
        </div>
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