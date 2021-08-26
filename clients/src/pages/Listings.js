import React from 'react'
import CityCard from '../components/CityCard'

function Listings(props) {
  let showCity = (city) => {
    props.history.push(`/listings/${city.id}`)
  }
  const cityListings = props.cities.map((city) => {
    return (
      <CityCard
        key={`${city.id}${city.name}`}
        showCity={showCity}
        city={city}
      />
    )
  })

  return <div className="listings">{cityListings}</div>
}

export default Listings
