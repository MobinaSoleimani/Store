import React from 'react';
import styles from "./Footer.module.css";
import facebook from "./assets/icons/facebook.png";
import instagram from "./assets/icons/instagram.png";
import youtube from "./assets/icons/youtube.png";
import twitter from  "./assets/icons/twitter.png";
import linkedin from "./assets/icons/linkedin.png";


const Footer = () => {
    return (
        <div>
         <footer>
          <div className={styles.footerlink}>
            <ul>
                 <h2>Popular Features</h2>
                <a href='#'><li>Free Meeting Scheduler App</li></a>
                <a href='#'><li>Social Media Tools</li></a>
                <a href='#'><li>Email Tracking Software</li></a>
                <a href='#'><li>Sales Email Automation</li></a>
                <a href='#'><li>Ads Software</li></a>
                <a href='#'><li>Email Marketing Software</li></a>
            </ul>
            <ul>
               <h2>Free Tools</h2>
                <a href='#'><li>Website Grader</li></a>
                <a href='#'><li>Make My Persona</li></a>
                <a href='#'><li>Email Signature Generator</li></a>
                <a href='#'><li>Blog Ideas Generator</li></a>
                <a href='#'><li>Industry Benchmark Data</li></a>
            </ul>
            <ul>
                <h2>Company</h2>
                <a href='#'><li>About Us</li></a>
                <a href='#'><li>Careers</li></a>
                <a href='#'><li>Management Team</li></a>
                <a href='#'><li>Investor Relations</li></a>
                <a href='#'><li>Blog</li></a>
                <a href='#'><li>Contact Us</li></a>
                <a href='#'><li>Board of Directors</li></a>
            </ul>
           </div>
            <div className={styles.socialmedia}>
            <a href='#'><img className={styles.media} alt='facebook' src={facebook}/></a>
            <a href='#'><img className={styles.media} alt='instagram' src={instagram}/></a>
            <a href='#'><img className={styles.media} alt='youtube' src={youtube}/></a>
            <a href='#'><img className={styles.media} alt='twitter' src={twitter}/></a>
            <a href='#'><img className={styles.media} alt='linkedin' src={linkedin}/></a>
        </div>
        </footer>
        </div>
    );
};

export default Footer;