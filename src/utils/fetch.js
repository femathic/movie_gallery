// axios.request(config)
// axios.get(url[, config])
// axios.delete(url[, config])
// axios.head(url[, config])
// axios.options(url[, config])
// axios.post(url[, data[, config]])
// axios.put(url[, data[, config]])
// axios.patch(url[, data[, config]])

import axios from 'axios';
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  }
};

const useFetch = async (method, path, data, headers) => {
  // const fetchData = async () => {
    try {
      const response = await axios[method](path, data, headers ? axiosConfig : null);
      return await response.data;
    } catch(err) {
      return err.response.data.error;
    }
  // } 

};

export default useFetch;


