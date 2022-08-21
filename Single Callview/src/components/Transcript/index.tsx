import React from 'react';
import styles from './style.module.css';

// type expandableProp = {
//   setExpand: () => void;
//   expand: boolean;
// };

const Transcript = ({ setExpand, expand, violations, transcript }: any) => {
  return (
    <div className={styles.transcriptSection}>
      <div className={styles.transcriptContent}>
        <div
          className={expand ? styles.eventsectionExpand : styles.eventsection}
        >
          <div className={styles.events}>Events</div>
          {violations.map((item: any) => (
            <div className={styles.violations} key={item}>
              <div>{item}</div>
            </div>
          ))}
        </div>
        <div className={styles.conversationSection}>
          {transcript.map((item: any, index: any) => (
            <div key={index}>
              <span className={styles.transcriptHeading}>Customer</span>
              <span className={styles.transcriptTime}>00:00</span>
              <div className={styles.transcriptText}>{item.text}</div>
            </div>
          ))}
        </div>

        {/* <div className={styles.expandIconDiv}>
          <img
            onClick={setExpand}
            className={styles.expandIcon}
            src="/assets/expand-icon.svg"
            alt="expand-icon"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Transcript;
