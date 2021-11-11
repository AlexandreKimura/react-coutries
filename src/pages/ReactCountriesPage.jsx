import { useState } from "react"
import Header from "../components/Header"
import Main from "../components/Main"
import TextInput from "../components/TextInput"

import { allCountries } from "../data/countries"

export default function ReactCountriesPage() {

  const [countryFilter, setCountryFilter] = useState('Argentina')

  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter)
  }

  return (
    <div>
      <Header>React Countries</Header>
      <Main>
        <TextInput 
          id="inputCountryFilter"
          labelDescription="Informe o nome do país(pelo menos 3 caracteres):" 
          inputValue={countryFilter}
          onInputChange={handleCountryFilterChange}
          autoFocus
        />
      </Main>
    </div>
  )
}