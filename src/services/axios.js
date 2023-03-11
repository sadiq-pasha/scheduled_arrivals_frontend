import axios from 'axios'

const data_url = '/data'

const getData = () => {
  return axios.get(data_url)
    .then(response => 
    {
      return response.data      
    })
}

export default getData