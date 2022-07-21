import { Button, Input } from 'antd';
import React, { useState } from 'react';
import styles from './style.module.css';

function Note() {
  const [inputValue, setinputValue] = useState<string>('');
  const [notes, setNotes] = useState<string[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinputValue(e.target.value);
  };

  const addNotes = () => {
    setNotes((val) => [...val, inputValue]);
  };

  return (
    <div className={styles.noteSection}>
      <h5>Add Note</h5>
      <div className={styles.addNote}>
        <Input allowClear={true} onChange={handleInput} />
        <Button onClick={addNotes}>Add Note</Button>
      </div>
      {notes.map((item) => (
        <p className={styles.noteStyle} key={item}>
          {item}
        </p>
      ))}
    </div>
  );
}

export default Note;
