import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Listings from './pages/Listings'
import Nav from './components/Nav'
import Axios from 'axios'

function App() {
  const [cities, setCities] = useState(cityArr)
  const [newCity, setNewcity] = useState({
    id: '',
    name: '',
    image: '',
    description: ''
  })

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
