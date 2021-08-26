import React from 'react'
import TextInput from '../components/TextInput'
import App from '../App'
function CityForm(props) {
  const handleSubmit = (e) => {
    props.addCity(e)
  }
  return (
    <div>
      <h1>Add A New Bucket List Item</h1>
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          value={props.newCity.name}
          onChange={props.handleChange}
          name={'name'}
          placeholder={'name'}
        />
        <TextInput
          type="text"
          value={props.newCity.image}
          onChange={props.handleChange}
          name={'image'}
          placeholder={'image'}
        />
        <TextInput
          type="text-area"
          value={props.newCity.description}
          onChange={props.handleChange}
          name={'description'}
          placeholder={'description'}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CityForm
