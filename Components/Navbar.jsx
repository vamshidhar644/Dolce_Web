import React from 'react'
import styles from "../styles/Navbar.module.css"
import Link from "next/link"
 
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.title}>
        
      </Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="">Get app</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/signup">Signup</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="">Signin</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;