import React, { useState } from 'react'
import boatArr from './data/boats'
import './styles/App.css'
// imports here
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Listings from './pages/Listings'
import BoatDetails from './pages/BoatDetails'
import BoatForm from './pages/BoatForm'
import Nav from './components/Nav'
// The boatArr is passed into state as the initial state for 'boats' in App.js

function App() {
  const [boats, setBoats] = useState(boatArr)
  const [newBoat, setNewBoat] = useState({
    id: '',
    name: '',
    img: '',
    description: '',
    price: ''
  })

  const addBoat = (e) => {
    e.preventDefault()
    const currentBoats = boats
    const addedBoat = {
      ...newBoat,
      id: parseInt(boats.length + 1),
      price: parseInt(newBoat.price)
    }
    currentBoats.push(addedBoat)
    setBoats(currentBoats)
    setNewBoat({ id: '', name: '', img: '', description: '', price: '' })
  }

  const handleChange = (e) => {
    setNewBoat({ ...newBoat, [e.target.name]: e.target.value })
  }

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/listings"
            component={(routerProps) => (
              <Listings {...routerProps} boats={boats} />
            )}
          />
          <Route
            path="/listings/:id"
            component={(routerProps) => (
              <BoatDetails {...routerProps} boats={boats} />
            )}
          />
          <Route
            path="/new"
            render={(props) => (
              <BoatForm
                {...props}
                newBoat={newBoat}
                handleChange={handleChange}
                addBoat={addBoat}
              />
            )}
          />
        </Switch>
      </main>
    </div>
  )
}

export default App
