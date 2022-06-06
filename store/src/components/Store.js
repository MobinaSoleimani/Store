import React, { useState,useContext } from 'react';
import Product from './shared/Product';
import { ProductsContext } from '../context/ProductContextProvider';
import { shorten } from '../helper/functions';
import styles from "./Store.module.css";

const Store = () => {
    const [search, setSearch] = useState("");
    const products = useContext(ProductsContext)
    const searchHandler = event => {
        setSearch(event.target.value)
        } 
    const searchedProducts = products.filter(product => shorten(product.title.toLowerCase()).includes(search.toLowerCase()))

    return (
        <div>
            {
                products.length &&
                <div>
                <div className={styles.searchBox}>
                <input type='text' className={styles.search} placeholder='Search...' value={search} onChange={searchHandler}/> 
                </div>
                    <div className={styles.container}>
                        {    
                                searchedProducts.map(product => <Product 
                                        key={product.id} 
                                        productData = {product}
                                    />)              
                        }
                       </div>
                       </div>
              }
        </div>
    );
};

export default Store;