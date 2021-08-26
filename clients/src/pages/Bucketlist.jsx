import React from 'react'
import CityCard from '../components/CityCard'


function Bucketlist(props) {
    let showCity = (city) => {
      props.history.push(`/listings/${city._id}`)
    }
    const cityListings = props.bucketitems.map((city) => {
      return (
        <CityCard
          key={`${city._id}${city.name}`}
          showCity={showCity}
          city={city}
        />
      )
    })
  
    return <div className="listings">{cityListings}</div>
  }
  
  export default Bucketlist