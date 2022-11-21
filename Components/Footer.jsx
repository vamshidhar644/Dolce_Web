import React from 'react'
import styles from '../styles/Footer.module.css'
import {AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillYoutube, AiFillLinkedin} from 'react-icons/ai'

import {FaGooglePlay} from 'react-icons/fa'
import {BsApple} from 'react-icons/bs'

function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.FooterHeader}>
          <h1 className={styles.title}>DOLCE</h1> 
          <div className={styles.Dropdowns}>
              <select className={styles.DDown}>

              </select>
              <select className={styles.DDown}>

              </select>
          </div>              
        </div>
        <div className={styles.FooterContainer}>
          <div className={styles.FooterBox}>
            <h2 className={styles.FooteSectionHead}>COMPANY</h2>
            <ul>
              <li><a href=''>Who we are</a></li>
              <li><a href=''>Blog</a></li>
              <li><a href=''>Careers</a></li>
              <li><a href=''>Report Fraud</a></li>
              <li><a href=''>Contact</a></li>
              <li><a href=''>Investor Relations</a></li>
            </ul>
          </div>
          <div className={styles.FooterBox}>
            <h2 className={styles.FooteSectionHead}>FOR FOODIES</h2>
            <ul>
              <li><a href=''>Code of Conduct</a></li>
              <li><a href=''>Community</a></li>
              <li><a href=''>Blogger Help</a></li>
              <li><a href=''>Mobile Apps</a></li>
            </ul>
          </div>
            <div className={styles.FooterBox}>
                <h2 className={styles.FooteSectionHead}>FOR YOU</h2>
                <ul>
                    <li><a href=''>Privacy</a></li>
                    <li><a href=''>Terms</a></li>
                    <li><a href=''>Security</a></li>
                    <li><a href=''>Sitemap</a></li>
                </ul>
            </div>
            <div className={styles.FooterBox}>
                <h2 className={styles.FooteSectionHead}>SOCIAL LINKS</h2>
                <div className={styles.icons}>
                    <div className=''><AiFillFacebook/></div>
                    <div className=''><AiFillTwitterCircle/></div>
                    <div className=''><AiFillInstagram/></div>
                    <div className=''><AiFillYoutube/></div>
                    <div className=''><AiFillLinkedin/></div>
                </div><br/>
                <h2 className={styles.FooteSectionHead}>Download App</h2>
                <div className={styles.icons}>
                    <FaGooglePlay  className={styles.btnDownload}/>
                    <BsApple className={styles.btnDownload}/>
                </div>
            </div>
        </div>
        <div className={styles.FootFooter}>
            <hr/>
            <p>By continuing past this page, you agree to our Terms of service, Cookie Policy, Privacy and content Policies. All Trademarks are properties of their respective owners.<br/>2021-2022  DOLCE Ltd. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer