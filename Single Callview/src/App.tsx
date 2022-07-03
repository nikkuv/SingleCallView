import React, { useState } from 'react';
import './App.css';
import SingleCallView from './components/SingleCallView/SingleCallView';
import { get, set, entries, update, setMany } from 'idb-keyval';
import { Input, Checkbox, Result } from 'antd';
const { Search } = Input;

type tagsObject = {
  name: string;
  accurate: boolean;
  inaccurate: boolean;
  description: string;
  selected?: boolean;
};

function App() {
  // how will db table look like
  // index    key           val
  // 0        tagname      {name: tagname, accurate: true; inacurate: false, delete: false}

  // const [tags, setTags] = useState<tagsObject>();

  // value coming from indexDB will be the initial value for selectedValues
  // const getAllValuesFromDB = () => {
  //   entries().then((entries) => console.log(entries));
  // };

  // const [selectedValues, setSelectedValues] = useState(getAllValuesFromDB());

  // const myobj: tagsObject = { name: 'saumya', accurate: false };

  // const addTgas = () => {
  //   set('tags', myobj);
  // };

  // const getTags = () => {
  //   get('tags').then((val) => setTags(val));
  // };

  const onSearch = () => {
    console.log('onsearch');
  };

  const updateDB = () => {
    update('tags', (val) => ({
      ...val,
      accurate: true,
    }));
  };

  const [selectedTags, setSelectedTags] = useState<tagsObject[]>([]);

  const handleCheckbox = (e: any) => {
    // find the item in tagsArray that has same name as selected array
    // add the value as selected true
    // add the value as deselected when it's already selected
    // add to the DB
    // tagsArray.map((item) => )
    // setSelectedTags((oldval) => [...oldval, e.target.value]);

    console.log(e.target);

    // const selectTag = tagsArray.find((item) => item.name === e.target.value);
    // const result = { ...selectTag, selected: true };
    // setSelectedTags([...tagsArray]);
  };

  const AddSelectedTagsToDB = () => {
    // change the value of tags array on select
    // {tagsArray.map((item) => return {
    // })}
    // tagsArray.map((item) => {
    //   return item.name
    // });
  };

  const tagsArray: tagsObject[] = [
    {
      name: 'tag1',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
      selected: true,
    },
    {
      name: 'tag2',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
    },
    {
      name: 'tag3',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
    },
    {
      name: 'tag4',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
    },
    {
      name: 'tag5',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
    },
    {
      name: 'tag6',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
    },
    {
      name: 'tag7',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
    },
    {
      name: 'tag8',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
    },
    {
      name: 'tag9',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
    },
    {
      name: 'tag10',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
    },
  ];

  return (
    <div className="App">
      <SingleCallView />
      {/* {tags !== undefined ? <div>{tags.name}</div> : null} */}
      <div>
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
        {tagsArray.map((item) => {
          return (
            <Checkbox
              key={item.name}
              onChange={handleCheckbox}
              value={item.name}
              // checked={item.selected}
            >
              {item.name}
            </Checkbox>
          );
        })}
        <button onClick={AddSelectedTagsToDB}>Apply</button>
      </div>
    </div>
  );
}

export default App;
