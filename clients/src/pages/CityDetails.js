import React, { useEffect, useState } from 'react'

function CityDetails(props) {
  const { bucketitems } = props
  const [city, setCity] = useState(null)
  let array1 = []
  console.log(props)
  useEffect(() => {
    async function findcity() {
      try {
        let selectedCities = props.cities.find(
          (city) => city._id === props.match.params._id
        )

        setCity(selectedCities)
        console.log(props.match.params._id)
        return <div></div>
      } catch (err) {
        console.log(err)
      }
    }
    findcity()
  })

  return city ? (
    <div className="detail">
      <div className="detail-header">
        <img src={city.image} alt={city.name} />
        <div>
          <h1>{city.name}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <p>{city.description}</p>
        <button
          className="addBtn"
          onClick={() => {
            array1 = props.bucketitems
            array1.push(city)
            props.setBucketitems(array1)
            console.log(bucketitems)
          }}
        >
          Add to Bucketlist
        </button>
      </div>
    </div>
  ) : null
}

export default CityDetails
