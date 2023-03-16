import axios from 'axios'

const getData = () => {
  return axios.get('/data')
    .then(response => 
    {
      return response.data      
    })
}

export default getData