import axios from 'axios'

const getData = () => {
  // return null when the server throws an error because the error handling is handled by the useEffect function.
  // when the useEffect sees 'null' it sets the flightdata to error, which then throws the 'SERVER ERROR' message.
  return axios.get('/data')
    .then(response => 
    {
      return response.data      
    })
    .catch(() => 
    {
      return null
    })
}

export default getData