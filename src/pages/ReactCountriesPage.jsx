import { useState } from "react"
import Countries from "../components/Countries"
import Header from "../components/Header"
import Main from "../components/Main"
import TextInput from "../components/TextInput"

import { allCountries } from "../data/countries"

import Country from "../components/Country";

export default function ReactCountriesPage() {

  const [countryFilter, setCountryFilter] = useState('Argentina')
  const [visitedCountries, setVisitedCountries] = useState([])

  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter)
  }

  function toggleVisitedCountry(countryId) {
    let newVisitedCountries = [...visitedCountries];

    if(newVisitedCountries.indexOf(countryId) !== -1) {
      newVisitedCountries = newVisitedCountries.filter(visitedCountryId => visitedCountryId !== countryId)
    }else {
      newVisitedCountries.push(countryId)
    }

    setVisitedCountries(newVisitedCountries)
  }

  const countryFilterLowerCase = countryFilter.trim().toLocaleLowerCase()

  const filteredCountries = countryFilterLowerCase.length >= 3 
    ? allCountries.filter(({ nameLowerCase }) => {
        return nameLowerCase.includes(countryFilterLowerCase)
      }) 
    : allCountries

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

      {/*<Countries visitedCountries={visitedCountries} onCountryClick={toggleVisitedCountry}>{filteredCountries}</Countries>*/}

      <Countries>

        <h2 className="text-center font-semibold">
          {filteredCountries.length} país(es)
        </h2>
        <h3 className="text-center font-semibold text-sm">
          {visitedCountries.length} país(es) visitados
        </h3>

        {
          filteredCountries.map(country => {
            const isVisited = visitedCountries.indexOf(country.id) !== -1
            return (
              <Country isVisited={isVisited} onCountryClick={toggleVisitedCountry} key={country.id}>{country}</Country>
            )
          })
        }
      </Countries>

      </Main>
    </div>
  )
}