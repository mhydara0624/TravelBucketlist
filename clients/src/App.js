import React, { useState, useEffect } from 'react'

import './styles/App.css'
import { BASE_URL } from './globle'
import { Route, Switch } from 'react-router-dom'

import Listings from './pages/Listings'
import CityDetails from './pages/CityDetails'
import { BASE_URL } from './globals'

import Nav from './components/Nav'
import axios from 'axios'
import Bucketlist from './pages/Bucketlist'
function App() {
  const [cities, setCities] = useState([])
  const [bucketitems, setBucketitems] = useState([])
  useEffect(() => {
    async function getCities() {
      let res = await axios.get(`${BASE_URL}`)
      console.log(res.data)
      setCities(res.data)
    }
    getCities()
    return <div></div>
  }, [])

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
