import React, { useEffect, useState } from 'react'

function CityDetails(props) {
  const [city, setCity] = useState(null)

  useEffect(() => {
    let selectedCities = props.cities.find(
      (city) => city.id === parseInt(props.match.params.id)
    setCity(selectedCities)
  }, [])

  return city ? (
    <div className="detail">
      <div className="detail-header">
        <img src={city.image} alt={city.name} />
        <div
          style={{
            minWidth: '30em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h1>{city.name}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>City ID: {city.id}</h3>
        </div>
        <p>{city.description}</p>
      </div>
    </div>
  ) : null
}

export default CityDetails
