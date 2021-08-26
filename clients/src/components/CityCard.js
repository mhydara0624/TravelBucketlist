import React from 'react'

function CityCard(props) {
  const { city } = props
  return (
    <div className="city-card" onClick={() => props.showCity(city)}>
      <img style={{ display: 'block' }} src={city.image} alt={city.name} />
      <h3>{city.name}</h3>
      <button className='addBtn' onClick={() =>  {}} >Add to Bucketlist</button>
    </div>
  )
}

export default CityCard
//comment
