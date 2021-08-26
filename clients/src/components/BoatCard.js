import React from 'react'

function BoatCard(props) {
  const { city } = props
  return (
    <div className="boat-card" onClick={() => props.showBoat(city)}>
      <img style={{ display: 'block' }} src={city.image} alt={city.name} />
      <h3>{boat.name}</h3>
    </div>
  )
}

export default BoatCard
