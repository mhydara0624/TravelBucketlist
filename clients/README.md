# React Router

![](https://i.ytimg.com/vi/4ii2L3D20S4/maxresdefault.jpg)

## Overview

Up to this point, our React applications have been limited in size, allowing us to use basic control flow in our components' render methods to determine what gets rendered to our users. However, as our React applications grow in size and scope, we need an easier and more robust way of rendering different components. Additionally, we will want the ability to set information in the url parameters to make it easier for users to identify where they are in the application.

In this lesson, we'll be building the routing components and paths for a luxury boating site.

## Lesson Objectives

- Learn about routing with react
- Use React Router to create routes and links to different pages
- Understand routing props

## Getting Started

You've been provided with starter code and components. Do not modify any of the provided code besides `App.js`.

- `Fork` and `clone` this repository.
- `cd` into this repo
- Run `npm install` to install our necessary packages.

## What is React Router?

React Router makes it easy for us to route URLs - not to different pages, but by dynamically loading different components on the same page as the user navigates to different URLs. Once we define how the URLs are routed to the components, React Router will manage our Single Page Application (SPA) `browser history` automatically.

## React Router Setup

First, we need to install `react-router-dom` and save it as a dependency.

```sh
npm install react-router-dom
```

To configure our current application to use React Router, we'll need to import it the `BrowserRouter` component into `index.js` and use it as a wrapper for our `App` component. `BrowserRouter` will, in turn, render `App` through which all the rest of our components will be rendered and give us access to router components:

```js
import { BrowserRouter } from 'react-router-dom'

// ...

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
```

By making `BrowserRouter` the root component of our app, all child components, including `App` will have access to a `history` object through which information like the current location and url can be accessed or changed. Additionally, in order to use the other routing components provided by React Router, a `BrowserRouter` provider component is necessary.

![](https://ncoughlin.com/static/f0a60a719be3f7c71e060208204d7319/74549/1.png)

---

## Making Our First Route

Next, in `App.js`, we need to import all of the components we want to use for pages in our app. All necessary components have been provided for you already. We're more focused here on setting up proper _routing_ between them. To start, let's import the `Home` component from the `pages` folder into `App.js` along with the `<Route/>` component.

```js
// src/App.js
import React, { useState } from 'react'
import { boats as boatArr } from './data/boats'
import './styles/App.css'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
```

Now we'll start by creating a `<Route/>` compoment within the `<main/>` tag and providing our page components to the routes. Make sure to import the `Route` component from `react-router-dom` first:

```js
// App.js
...
  return (
    <div className="App">
      <header>{/* Import Nav here */}</header>
      <main>{/* Create Routes to page components here */}</main>
    </div>
  )
```

- Think of `App.js` as an entry point for our application that will control the flow of URL routes and links as we add them.

- A **`Route`** component connects a certain `path` in the URL with the relevant component to `render` at that location.

- The `path` for a `<Route/>` refers to the URL that the route is associated with. Note: the `'/'` path is referred to as the root path of our application, as it is the first path we have access to when our site loads, so it makes the most sense to render a `Home` page at this route.

- Components are provided to a `<Route/>` component through either a `component` or `render` prop, which tells the route which component to render.

---

## React Router Props

Now that we've added in our `Home` page, let's spin up the React app with `npm start`.

Inside of `Home.js`, add in console.log of `props`.

We haven't passed in any props to the component in our route, but you might notice that we now have access to `location`,`history`, and `match` props from within our `Home` component.

These are props that React Router provides components rendered by `<Route/>` components by default. Let's break down what each of them is used for:

- The `location` prop is used to determine the URL pattern, or location, of the current route. It has access to a `pathname` key that will give programmitc access to the current URL pattern.
- The `history` prop allows us to manipulate routes dynamically and navigate between them. A common method used from history `push()`, which will tell React Router to navigate to the URL location provided in its arguments.
- The `match` prop gives us detailed information about a route. An important key provided by match that we will be using is the `params` key, which gives us access to any URL params present in the route location.

---

## Adding Links

Now let's add in a way of getting back to the `Home` page. Import the `Nav` component from the `components` folder into `App.js` and render it inside the `<header>` tag.

Now, we'll import the `NavLink` component in our `Nav` component to set up a link back to the `Home` page:

```js
import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar">
      <h4>Starboard</h4>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
    </nav>
  )
}

export default Nav
```

The `<NavLink>` component provided by React Router allows us to create links, like standard HTML `<a>` tags that navigate to a location in our application's routes.

- The `<NavLink>` and `<Link>` components provided by React Router require a `to` prop, similar to an `href` in an `<a>` tag, that tell React Router where to navigate.
- The `to` prop needs to match one of the `path` props of a `<Route/>` to navigate between locations in our application.

---

## Passing Props Into Route Components

Let's add in another route to `App.js`

- Import the `Listings` component and add this route to `App.js`

```js
<Route path="/listings" component={Listings} />
```

You might notice that the `Listings` component is making use of a prop called `boats`, however we aren't currently passing anything to it. Let's fix that.

- When passing custom props down to a component rendered by a `<Route/>` we need to write an anonymous function inside of the `component` or `render` prop being used to render the component.

- The component being rendered should be written as a tag inside of this anonymous function

Let's change the `component` prop of our `'/listings'` route:

```js
<Route path="/listings" component={() => <Listings />} />
```

Now, we'll pass in the props we'll need to be available in `Listings.js`:

```js
<Route
  path="/listings"
  component={(props) => <Listings {...props} boats={boats} />}
/>
```

- Here we've passed in the custom prop of `boats`, which gives our `Listings` component access to the array of boats in state.
- We've also passed `props` as an argument in our anonymous function and added `{...props}` to our component. This gives us access to the props provided by React Router.

Now that we've added in the route, our boats should be rendering in our `Listings` component at the `'/listings'` location.

- Let's add in a quick `<NavLink>` to `Nav.js` to allow quick access to our listings.
- It should have a `to` prop of `'/listings'` to connect to the route we've just set up.

Try clicking on the link in the navbar to see if your route is working properly! You should see all of the boats passed from our boats state on the page.

Wait, the boats aren't showing up?

Well, it looks like we'll need to differentiate our routes then!

In the `<Route />` component for our `Home` page, we'll add in an `exact` prop before its `path`

```js
<Route exact path="/" component={Home} />
```

What the `exact` prop does for our `<Route />` component is that it ensures the path is an _exact match_ to the path we've given the route, otherwise it will not render the component.

Our `'/listings'` path _contained_ the `'/'` path, so we weren't able to navigate to it without specifying that the `'/'` path was only for an `exact` match on the URL location.

Now that we've set the `Home` route to be `exact`, we should be able to see all of our boat listings when we click on the `Listings` link from the navbar! Great!

---

## Using Params and Router Props

Now that we have a route to view a list of all of our boats, how would we go about creating a Route for a specific boat to view its details? This would be a great case for creating a _dynamic route_, utilizing params!

- In `App.js`, import the `BoatDetails` component.
- Now we'll set up a `<Route />` for it that uses params, or viariable URL patterns, to create navigation for every unique boat
- We'll also render the `BoatDetails` component inside of an anonymous function since we'll need to pass props to it as well.

```js
<Route path="/listings/:id" component={(props) => <BoatDetails {...props} boats={boats}>}>
```

Note the `/:id` following the `/listings` portion of the `path`. What we've done here by using the colon `:` followed by `id` is establish a variable `id` _within our URL pattern_ for this route, or in other words, an id param.

- Params are used to create dynamic routes that change depending on the live data passed into the param. In this case, our param is denoted by `'/:id'`

Ok, but how do we navigate to this route?

Let's do that from our `Listings.js` component, since it has access to data about our boats.

You might have noticed that `Listings.js` has a method called `showBoat()` that is currently doing nothing. We'll alter it now to create dynamic navigation to our `'/listings'` route.

- Since each `boat` is being passed as an argument into the method, we'll make use of a specific attribute to create a dynamic route.
- Add the following to the `showBoat()` method in `Listings.js`:

```js
props.history.push(`/listings/${boat.id}`)
```

Here we're using React Router's `history` prop and its `.push()` method to tell our router to navigate to a new route. We're passing the `id` attribute of the boat into the new `location` we want to navigate to. This way, we will have a unique route path for every boat in our list. For example, if we had a boat with an id of 1, we would be navigated to `'/listings/1'` when this method is fired for that boat.

Great, we've set up a way of navigating to a unique boat, but we aren't gettin the data to display just yet.

Let's move over to `BoatDetails.js` to fix that. It currently has a `useEffect()` life cycle method that isn't doing anything and a state property for a `boat`. Add the following to the `useEffect`.

```js
useEffect(() => {
  let selectedBoat = props.boats.find(
    (boat) => boat.id === parseInt(props.match.params.id)
  )
  setBoat(selectedBoat)
}, [])
```

- Here, we're using React Router's `match.params` prop at the key of `id` to pull down the id param from our URL location.
- With access to the id from the params, we can use it to find a specific boat by its id from the `boats` array that was passed as props into our `BoatDetails` component.
- Finally, we'll set the state of `boat` to the boat we've found to display it when the component is mounted.

Try clicking on a boat from the `Listings` page and see what happens.

Wait, you can still see the whole list, but the boat is showing up below it? Well, it seems like now would be a great time to introduce React Router's `<Switch />` component, since it seems that our routes are stacking on top of each other.

---

## Using a Switch Router Component

<img src="https://www.freightrailreform.com/wp-content/uploads/2016/07/Rail-Switch.jpg" alt="switch" height="400" />

React Router's `<Switch />` component is used as a wrapper for `<Route />` components to prevent them from stacking on top of each other when navigating. Like a train switch ensures trains stay on the rails when switching tracks, it ensures that only one route is being rendered at a time.

We'll also add in the `exact` prop to our `/listings` route, since its path is contained by our `/listings/:id` route and should be distinct.

To use it, we'll wrap it around our routes in `App.js` like so:

```js
import { Route, Switch } from 'react-router-dom';

...

<Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/listings" component={(props) => <Listings {...props} boats={boats} />} />
  <Route path="/listings/:id" render={(props) => <BoatDetails {...props} boats={boats} />} />
</Switch>
```

Now only our `BoatDetails` component should render when we click on a listing.

It's common practice to set up your routes inside of a `<Switch/>` component to begin with, but we've held off until now to understand why its important to use a `<Switch/>`

Awesome, now let's add one final route inside of our switch in `App.js`.

---

## Route Rendering methods

In `App.js` we'll import our last `page` component, `BoatForm.js`, which will allow us to create new boats and add them to our listings.

We'll also need a `<Route />` for this component inside of our `<Switch />`:

```js
<Route
  path="/new"
  component={(props) => (
    <BoatForm
      {...props}
      newBoat={newBoat}
      handleChange={handleChange}
      addBoat={addBoat}
    />
  )}
/>
```

Our `BoatForm` has access to two methods from `App.js`, the `handleChange()` method, which will update the state of `newBoat` from its form inputs and `addBoat()`, which will add a new boat into our `boats` state.

Let's add in a `NavLink` in `Nav.js` that connects to this route.

```js
<NavLink to="/new">New Boat</NavLink>
```

Now that we can view this route, let's try adding in a new boat!

Oh no, don't tell me the form is acting up! What could possibly be wrong with it?

Actually, the _render method_ for our `'/new'` `<Route/>` is the issue here. But why? Let's talk about `<Route />` component render props.

You might notice we've used the `component` prop in our route to render the `<Home />` component. The` <Route/>` component actually has 3 ways to render a component.

```jsx
// component
<Route path="" component={} />
// render
<Route path="" render={} />
// children
<Route path="" children={} />
```

Let's break them down before moving on. We won't be covering `<Route children>` for the scope of this class, but knowing the differences between `render` and `component` is important when working with React Router.

#### `<Route component={} />`

The `component` method renders a component when the requested [`location`](https://reacttraining.com/react-router/web/api/location), or URL pattern, matches a `<Route/>`'s `path`.

- When you use component the router uses `React.createElement` to create a new React element from the given component.
- That means if you provide an inline function to the component prop, you would create a new component every render.
- This results in the existing component unmounting and the new component mounting instead of just updating the existing component.

When might this be a better choice for our `<Route />`?

- The `component` would be the preferred choice for components that are mostly static display components, meaning that they will not be updating continually with new data.

#### `<Route render={} />`

The render method uses inline rendering, meaning that the rendered content doesn't need to unmount or remount. You pass in a _function_ to be called when the [`location`](https://reacttraining.com/react-router/web/api/location), or URL pattern, matches rather than creating a `React.createElement`.

When is it a better idea to use the `render` prop for a component over `component` with a `<Route/>`?

- Since the `render` method allows for inline rendering, it is much more useful to use when routing to pages that might have form elements or components.
- Since a component will mount and unmount with a new component on every render with the `component` method, the `render` method is the preferred choice for components with form inputs or components that are continually updating.

Note: `<Route component>` takes precedence over `<Route render>` and both take precedence over `<Route children>` so don’t use more than one in the same `<Route>`.

Now that we know a little more about rendering components inside of `<Route />` components, let's fix our `/new` route by using the proper rendering prop. Its issue was that it was mounting and unmounting the `BoatForm` component on every render, which makes typing into the inputs very difficult!

```js
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
```

Now that we've set up the Route properly, let's add one last thing to our `BoatForm`'s `handleSubmit()` method so that it navigates back to the listings after we create a new boat.

```js
props.history.push('/listings')
```

And with that, we've set up our `BoatForm`! Congrats!

---

## You Do

There is one component we haven't used from React Router, the `<Link/>` component. It works exactly like the `<NavLink/>` component with a `to` prop that connects it to a route.

For this section we'll need to make use of 2 `<Link/>` components.

- In `Listings.js` import a `Link` component from React Router and use it to create a back button that takes us back to the `Home` page at the `'/'` route.
- In `BoatDetails.js` import another `Link` component to create a back button that takes us back to the `'/listings'` route.

---

## Recap

With React Router, we're able to create navigation in our applications with special components and properties. Key concepts covered here include:

- `<Switch />` - Used to ensure only one route is rendered at a time
- `<Route />` - Used to render specific components at different URL locations
- `<NavLink />` - Used to link to different routes, usually in a navbar
- `<Link />` - Used to link to different routes, usually from within a component rendered by a route
- `render` - Used to render a component for a route, allows for dynamic rendering, which is useful when working with forms
- `component` - Used to render a component for a route, usually best used with static display components where data isn't changing frequently
- `paths` - Used to establish the location (URL pattern) for a route. The `exact` prop can be used alongside it to ensure that only an exact match for the path will render a route
- `params` - Variable key values used inside of the URL pattern to create dynamic routing
- `history` - Used to navigate between routes dynamically

## Resources

- [React Router Quick Start](https://reacttraining.com/react-router/web/guides/quick-start)
- [React Router Basic Components](https://reacttraining.com/react-router/web/guides/basic-components)
- [React Router Basic Example](https://reacttraining.com/react-router/web/example/basic)
- [React Router URL Parameters](https://reacttraining.com/react-router/web/example/url-params)
