import React from 'react'

function BoatCard(props) {
  const { boat } = props
  return (
    <div className="boat-card" onClick={() => props.showBoat(boat)}>
      <img style={{ display: 'block' }} src={boat.img} alt={boat.name} />
      <h3>{boat.name}</h3>
    </div>
  )
}

export default BoatCard
