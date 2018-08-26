import React from 'react'
import axios from 'axios'
import Countrydata from './components/Countrydata'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filter: '',
      results: 0
    }
  }

  componentDidMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        this.setState({ countries: response.data })
      })
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  }

  showCountries = () => {
    const countryList = this.state.countries.filter(rivi => rivi.name.toLowerCase().startsWith(this.state.filter.toLowerCase()))
    if ( this.state.filter === '' ) {
      return
    }

    else if  ( countryList.length > 10 ) {
        return <p>Too many matches, specify another filter</p>
         
    }

    else if ( countryList.length === 1 ) {
      return <Countrydata name={countryList[0].name}
                          capital={countryList[0].capital}
                          population={countryList[0].population}
                          flag={countryList[0].flag}
              />
    }
    
    else {
      
      return countryList.map(rivi =>  <p key={rivi.numericCode}>{rivi.name}</p>) 
    }
  }
  

  render() {
    return (
      <div>
        find countries: 
        <input value={this.state.filter}
               onChange={this.handleFilterChange} />

        <div>{this.showCountries()}</div>
      </div>
    )
  }
}
export default App