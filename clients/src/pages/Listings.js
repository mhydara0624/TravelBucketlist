import React from 'react'
import BoatCard from '../components/CityCard'

function Listings(props) {
  let showBoat = (boat) => {
    props.history.push(`/listings/${boat.id}`)
  }
  const boatListings = props.boats.map((boat) => {
    return (
      <BoatCard
        key={`${boat.id}${boat.name}`}
        showBoat={showBoat}
        boat={boat}
      />
    )
  })

  return <div className="listings">{boatListings}</div>
}

export default Listings
