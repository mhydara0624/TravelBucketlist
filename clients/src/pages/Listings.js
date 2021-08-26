import React from 'react'
import BoatCard from '../components/BoatCard'

function Listings(props) {
  let showCity = (boat) => {
    props.history.push(`/listings/${boat.id}`)
  }
  const boatListings = props.boats.map((boat) => {
    return (
      <BoatCard
        key={`${boat.id}${boat.name}`}
        showCity={showCity}
        boat={boat}
      />
    )
  })

  return <div className="listings">{boatListings}</div>
}

export default Listings
