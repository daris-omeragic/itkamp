import React, { useEffect } from 'react';
import { fetchAllProducts } from '../../api/productsApi';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../redux/productsSlice';

const MyComponent = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchAllProducts();
          dispatch(setProducts(data));
        } catch (error) {
          console.log(error);
        }
      };
  
      if (Object.keys(products).length === 0) {
        fetchData();
      }
      console.log(products);
    }, [dispatch, products]);
  
    return <pre>{JSON.stringify(products, null, 2)}</pre>;
  };
  export default MyComponent;  

