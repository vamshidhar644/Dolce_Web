import React from 'react'
import styles from '../styles/OtherOptions.module.css'

function OtherOptions() {
  return (
    <div>
        <div className={styles.OtherOptionsContainer}>
            <div className={styles.OtherOptionsHeader}>
                <h1>Explore other options for you here</h1>
            </div>
            <div className={styles.DessertsBody}>
                <h3 className={styles.title}>Top Desserts chains</h3>
                <ul className={styles.DessertsList}>
                    <li><a href="" id="DessertItem">Ben & Jerry</a></li>
                    <li><a href="" id="DessertItem">Baskin-Robbins</a></li>
                    <li><a href="" id="DessertItem">Haagen-Dazs</a></li>
                    <li><a href="" id="DessertItem">Walls</a></li>
                    <li><a href="" id="DessertItem">Dairy Queen</a></li>
                    <li><a href="" id="DessertItem">Nestle</a></li>
                    <li><a href="" id="DessertItem">Blue Bell Creameries</a></li>
                    <li><a href="" id="DessertItem">Breyers</a></li>
                    <li><a href="" id="DessertItem">Cold Stone Creamery</a></li>
                    <li><a href="" id="DessertItem">Carte D'Or</a></li>
                </ul>  
            </div><br/>
            <div className={styles.CitiesBody}>
                <h3 className={styles.title}>Cities we Deliver</h3>
                <ul className={styles.CitiesList}> 
                    <li><a href="" id="CityName">Delhi NCR</a></li>
                    <li><a href="" id="CityName">Kolkata</a></li>
                    <li><a href="" id="CityName">Mumbai</a></li>
                    <li><a href="" id="CityName">Bengaluru</a></li>
                    <li><a href="" id="CityName">Pune</a></li>
                    <li><a href="" id="CityName">Hyderabad</a></li>
                    <li><a href="" id="CityName">Chennai</a></li>
                    <li><a href="" id="CityName">Lucknow</a></li>
                    <li><a href="" id="CityName">Koci</a></li>
                    <li><a href="" id="CityName">Jaipur</a>   </li>
                    <li><a href="" id="CityName">Ahmedabad</a></li>
                    <li><a href="" id="CityName">Chandigarh</a></li>
                    <li><a href="" id="CityName">Goa</a></li>
                    <li><a href="" id="CityName">Indore</a></li>
                    <li><a href="" id="CityName">Nashik</a></li>
                    <li><a href="" id="CityName">Ooty</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default OtherOptions