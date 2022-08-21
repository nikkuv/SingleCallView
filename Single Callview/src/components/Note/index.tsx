import { Button, Input, Modal } from 'antd';
import { set } from 'idb-keyval';
import React, { useState } from 'react';
import styles from './style.module.css';

function Note() {
  const [inputValue, setinputValue] = useState<string>('');
  const [notes, setNotes] = useState<string[]>([]);
  const [editeVal, setEditedVal] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const deleteNote = (item: string) => {
    const remainingArr = notes.filter((note) => note !== item);
    setNotes(remainingArr);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinputValue(e.target.value);
  };

  const addNotes = () => {
    if (inputValue) {
      setNotes((val) => [...val, inputValue]);
    }
  };

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEditedVal(e.target.value);
  // };

  // const onBlur = (event: any) => {
  //   if (event.target.value.trim() === '') {
  //     setinputValue(inputValue);
  //   } else {
  //     setEditedVal(event.target.value);
  //   }
  // };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleEditVal = (e: any) => {
    setEditedVal(e.target.value);
  };

  const handleOk = (item: string) => {
    setIsModalVisible(false);

    // update notes value
    const noteArr = [...notes];
    const index = noteArr.indexOf(item);
    if (index !== -1) {
      noteArr[index] = editeVal;
    }
    setNotes(noteArr);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // const handleEditedValue = (item: string) => {
  //   const arr = [...notes];
  //   arr.find();
  // };

  return (
    <div className={styles.noteSection}>
      <h5>Add Note</h5>
      <div className={styles.addNote}>
        <Input allowClear={true} onChange={handleInput} />
        <Button onClick={addNotes}>Add Note</Button>
      </div>
      {notes.length > 0
        ? notes.map((item) => (
            <div key={item}>
              {/* <input
                type="text"
                value={item}
                onChange={onChange}
                onBlur={onBlur}
              ></input> */}
              <span className={styles.noteStyle}>{item}</span>
              <img
                className={styles.noteIcon}
                src="/assets/trash-simple.svg"
                alt="delete-note"
                onClick={() => deleteNote(item)}
              ></img>
              <img
                className={styles.noteIcon}
                src="/assets/pencil-simple-line.svg"
                alt="delete-note"
                onClick={showModal}
              ></img>
              <Modal
                title="Basic Modal"
                visible={isModalVisible}
                onOk={() => handleOk(item)}
                onCancel={handleCancel}
              >
                <p>modal</p>
                <Input onChange={handleEditVal} defaultValue={item}></Input>
              </Modal>
            </div>
          ))
        : null}
    </div>
  );
}

export default Note;
