import React from 'react';
import styles from './style.module.css';

type expandableProp = {
  setExpand: () => void;
  expand: boolean;
};

const Transcript = ({ setExpand, expand }: expandableProp) => {
  return (
    <div className={styles.transcriptSection}>
      <div className={styles.transcriptContent}>
        <div
          className={expand ? styles.eventsectionExpand : styles.eventsection}
        >
          <div className={styles.events}>Events</div>
        </div>
        <div className={styles.expandIconDiv}>
          <img
            onClick={setExpand}
            className={styles.expandIcon}
            src="/assets/expand-icon.svg"
            alt="expand-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Transcript;
