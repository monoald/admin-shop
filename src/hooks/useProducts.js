import { useState, useEffect } from 'react';
import axios from 'axios';
import endPoints from 'services/api';

const useProducts = () => {
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(0);
  const PRODUCTS_LIMIT = 5;
  const [products, setProducts] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(endPoints.products.getProducts(PRODUCTS_LIMIT, offset));
      setProducts(response.data)
        }
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [offset, PRODUCTS_LIMIT]);

  return {
    page, 
    products,
    setOffset,
    setPage,
    PRODUCTS_LIMIT,
  };
}

export default useProducts;