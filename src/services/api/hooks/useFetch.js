import { useState, useEffect } from 'react';
import axios from 'axios';
import endPoints from '..';

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await axios.get(endpoint);
    setData(response.data);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [endPoints]);

  return data;
}

export default useFetch;