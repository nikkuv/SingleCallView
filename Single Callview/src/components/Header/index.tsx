import React from 'react';
import styles from './style.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <h3 className={styles.heading}>CGRANT</h3>
      <div className={styles.headerContent}>
        <div>
          <img src="/assets/calendar-blank.svg" alt="calendar-icon"></img>
          <span className={styles.headerSubHeading}>21 JAN 2020 @ 05:50PM</span>
        </div>
        <div>
          <img src="/assets/clock.svg" alt="time-icon"></img>
          <span className={styles.headerSubHeading}>1m 5s</span>
        </div>
        <img
          src="/assets/download-icon.svg"
          alt="download-audio-file-icon"
        ></img>
        <img src="/assets/copy-link.svg" alt="copy-call-link-icon"></img>
      </div>
    </div>
  );
}

export default Header;
