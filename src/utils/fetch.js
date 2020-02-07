import axios from 'axios';

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  }
};

const useFetch = async (method, path, data, headers) => {
  try {
    const response = await axios[method](path, data, headers ? axiosConfig : null);
    return await response;
  } catch(error) {
    return error;
  }
};

export default useFetch;