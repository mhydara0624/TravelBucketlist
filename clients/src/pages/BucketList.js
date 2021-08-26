import React, { useState } from 'react'
import React from 'react'
import CityCard from '../components/CityCard'

const BucketList = () => {
    const [lists, setList] = useState()
    return (
        <div className="list">
            <CityCard lists={city}/>
        </div>
        )
}

export default BucketList