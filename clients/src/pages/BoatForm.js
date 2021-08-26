import React from 'react'
import TextInput from '../components/TextInput'
import App from '../App'
function BoatForm(props) {
  const handleSubmit = (e) => {
    props.addBoat(e)
  }
  return (
    <div>
      <h1>Add A New Boat Listing</h1>
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          value={props.newBoat.name}
          onChange={props.handleChange}
          name={'name'}
          placeholder={'name'}
        />
        <TextInput
          type="text"
          value={props.newBoat.img}
          onChange={props.handleChange}
          name={'img'}
          placeholder={'image'}
        />
        <TextInput
          type="text-area"
          value={props.newBoat.description}
          onChange={props.handleChange}
          name={'description'}
          placeholder={'description'}
        />
        <TextInput
          type="text"
          value={props.newBoat.price}
          onChange={props.handleChange}
          name={'price'}
          placeholder={'price'}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default BoatForm
