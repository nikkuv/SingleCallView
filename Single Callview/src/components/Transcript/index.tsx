import React from 'react';
import styles from './style.module.css';

function Transcript() {
  return (
    <div className={styles.transcriptSection}>
      <div className={styles.transcriptContent}>
        <div className={styles.eventsection}>
          <div className={styles.events}>Events</div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Transcript;
