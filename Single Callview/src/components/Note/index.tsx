import { Button, Input } from 'antd';
import React from 'react';
import styles from './style.module.css';

function Note() {
  return (
    <div className={styles.noteSection}>
      <h5>Add Note</h5>
      <div className={styles.addNote}>
        <Input />
        <Button>Add Note</Button>
      </div>
    </div>
  );
}

export default Note;
