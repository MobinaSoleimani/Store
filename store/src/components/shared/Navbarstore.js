import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContextProvider';
import shopIcon from "../../assets/icons/shop.svg";
import styles from "./Navbarstore.module.css";

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">Products</Link>
                
                    <Link to="/cart">
                       <div className={styles.iconContainer}>
                        <img alt='shop' src={shopIcon} />
                        <span>{state.itemsCounter}</span>
                        </div>

                    </Link>
                
            </div>
        </div>
    );
};

export default Navbar;