import React from 'react';
import styles from '../styles/GetApp.module.css';

import { FaGooglePlay } from 'react-icons/fa';
import { BsApple } from 'react-icons/bs';

const GetApp = () => {
  return (
    <div className={styles.AppContainer}>
      <div className={styles.AppImage}>
        <div className={styles.imagehere}></div>
      </div>
      <div className={styles.AppBody}>
        <h3 className={styles.title}>Get the Dolce App</h3>
        <p>
          We will send you a link, open it on your phone to download the app
        </p>
        <form
          className={styles.form}
          method="post"
          name="FormName"
          action="Sign.php"
        >
          <div className={styles.MailOrPhone}>
            <div className={styles.Radio}>
              <input
                type="radio"
                name="R_app"
                id="email"
                defaultChecked={true}
              />
              <label className={styles.radioLabel}>Email</label>
            </div>
            <div className={styles.Radio}>
              <input type="radio" name="R_app" id="phone" />
              <label className={styles.radioLabel}>Phone</label>
            </div>
          </div>
          <div className={styles.inputBox}>
            <input
              type="text"
              name="Pbox"
              id="InputBox"
              placeholder="Enter Email here..."
              onChange=""
            />
            <h5 className={styles.SendButton}>Send App Link</h5>
          </div>
        </form>
        <div className={styles.download}>
          <p>Download app</p>
          <FaGooglePlay className={styles.btnDownload} />
          <BsApple className={styles.btnDownload} />
        </div>
      </div>
    </div>
  );
};

export default GetApp;
