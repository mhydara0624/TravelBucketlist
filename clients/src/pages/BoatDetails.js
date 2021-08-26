import React, { useEffect, useState } from 'react'

function BoatDetails(props) {
  const [boat, setBoat] = useState(null)

  useEffect(() => {
    let selectedBoats = props.boats.find(
      (boat) => boat.id === parseInt(props.match.params.id)
    )
    setBoat(selectedBoats)
  }, [])

  return boat ? (
    <div className="detail">
      <div className="detail-header">
        <img src={boat.img} alt={boat.name} />
        <div
          style={{
            minWidth: '30em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h1>{boat.name}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>Price: ${boat.price}</h3>
          <h3>Boat ID: {boat.id}</h3>
        </div>
        <p>{boat.description}</p>
      </div>
    </div>
  ) : null
}

export default BoatDetails
