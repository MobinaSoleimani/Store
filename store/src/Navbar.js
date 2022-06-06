import React,{useState} from 'react';
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "./assets/icons/i.svg";
import hamburger from "./assets/icons/hamburger.png";
import close from "./assets/icons/close.png";

const Navbar = () => {
    const[click,setClick]=useState({show:false,});

    const hamburgerHandler=()=>{
        setClick({...click,show:true})
        }
    const menuHandler=()=>{
        setClick({...click,show:false})
        }

    return (
        <>
        <div className={styles.mainHeader}>
        <header className={styles.header}>
          <div className={styles.navbar}>
          <div className={styles.hamburgerMenu}> 
          <div>
          <img src={hamburger} alt="hamburger" className={click.show ? styles.f :styles.hamburger} onClick={hamburgerHandler} />
              </div> 
              <div className={click.show ? styles.menu : styles.f} >

                  <div>               
                 <img src={close} alt="close" className={click.show ? styles.close : styles.f} onClick={menuHandler} />
                  </div>
                       <ul>
                           <li><a href='#'>Home</a></li>
                           <li><a href='#'>About</a></li>
                           <li><a href='#'>Services</a></li>
                           <li><a href='#'>Contact</a></li>
                       </ul>
                   </div>
              </div>
              <div className={styles.list}>
                  <div>
                  <Link  to="/home">
                  <img src={logo} alt="logo" className={styles.logo}/>
                  </Link>
                  </div>
              </div>  
              <div className={styles.btns}>
              <button  className={styles.btn} type='button'><Link className={styles.link} to="/SignUp">SignUp</Link></button>
              <button className={styles.btn} type='button'><Link  className={styles.link} to='/Login'>Login</Link></button>
               </div>
          </div>
       </header>
   </div>
   </>
    );
};

export default Navbar;