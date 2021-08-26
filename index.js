const testbutton = document.querySelector('.button1')
testbutton.addEventListener('click', async () => {
  let response = await axios.get(`http:localhost:3001/cities`)
  console.log(response.data)
})
