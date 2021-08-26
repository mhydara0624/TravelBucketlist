import React, { useState, useEffect } from 'react'

import './styles/App.css'

import { Route, Switch } from 'react-router-dom'

import Listings from './pages/Listings'
import CityDetails from './pages/CityDetails'
import CityForm from './pages/CityForm'
import Nav from './components/Nav'
import axios from 'axios'
import Bucketlist from './pages/Bucketlist'
function App() {
  const [cities, setCities] = useState([])
  const [bucketitems, setBucketitems] = useState([])
  useEffect(() => {
    async function getCities() {
      let res = await axios.get(`http://localhost:3001/cities`)
      console.log(res.data)
      setCities(res.data)
    }
    getCities()
    return <div></div>
  }, [])

  const [newCity, setNewCity] = useState({
    _id: '',
    name: '',
    image: '',
    description: ''
  })

  const addCity = (e) => {
    e.preventDefault()
    const currentCities = cities
    const addedCity = {
      ...newCity,
      _id: parseInt(cities.length + 1)
    }
    currentCities.push(addedCity)
    setCities(currentCities)
    setNewCity({ _id: '', name: '', img: '', description: '' })
  }

  const handleChange = (e) => {
    setNewCity({ ...newCity, [e.target.name]: e.target.value })
  }

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Switch>
          <Route
            exact
            path="/"
            component={(routerProps) => (
              <Listings {...routerProps} cities={cities} />
            )}
          />
          <Route
            path="/listings/:_id"
            component={(routerProps) => (
              <CityDetails
                {...routerProps}
                cities={cities}
                setBucketitems={setBucketitems}
                bucketitems={bucketitems}
              />
            )}
          />
          <Route
            path="/new"
            render={(props) => (
              <CityForm
                {...props}
                newCity={newCity}
                handleChange={handleChange}
                addCity={addCity}
              />
            )}
          />
          <Route
            path="/Bucketlist"
            render={(props) => (
              <Bucketlist
                {...props}
                bucketitems={bucketitems}
                setBucketitems={setBucketitems}
              />
            )}
          />
        </Switch>
      </main>
    </div>
  )
}

export default App
