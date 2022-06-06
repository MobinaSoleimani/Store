import React, { useState, useEffect, createContext } from 'react';
import Loading from "../assets/icons/Loading.gif";
import styles from "./ProductContextProvider.module.css";
import { getProducts } from '../services/api';

export const ProductsContext = createContext();

const ProductContextProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts());
        }

        fetchAPI();
    }, []);


    return (
        <>
          {!products.length &&
                <div className={styles.main}>
               <img  src={Loading} alt='loading'/>                          
                </div>
            }
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
        </>
    );
};

export default ProductContextProvider;