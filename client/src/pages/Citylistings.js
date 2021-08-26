import React from 'react'
import CityCards from '../components/CityCards'

function Listings(props) {
  const cityLists = (city) => {
    props.history.push(`/Citylistings/${city.id}`)
  }
  const cityList = props.citiesInfo.map((city) => {
    return <CityCards cityLists={cityLists} city={city} />
  })
  return <div>{cityLists}</div>
}

export default Listings

//
