import React, { useEffect, useState } from 'react';
import { set, entries, update } from 'idb-keyval';
import { Input, Checkbox, Button, Tag } from 'antd';
const { Search } = Input;
import styles from './style.module.css';

type tagsObject = {
  name: string;
  accurate: boolean;
  inaccurate: boolean;
  description: string;
  selected: boolean;
  color: string;
};

function Tags() {
  const tagsArray: tagsObject[] = [
    {
      name: 'tagfirst',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
      selected: false,
      color: 'red',
    },
    {
      name: 'tagsecond',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
      selected: false,
      color: 'blue',
    },
    {
      name: 'tagthird',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
      selected: false,
      color: 'cyan',
    },
    {
      name: 'tagforth',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
      selected: false,
      color: 'red',
    },
    {
      name: 'tagfive',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
      selected: false,
      color: 'purple',
    },
    {
      name: 'tagsix',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
      selected: false,
      color: 'cyan',
    },
    {
      name: 'tagseven',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
      selected: false,
      color: 'orange',
    },
    {
      name: 'tageight',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
      selected: false,
      color: 'purple',
    },
    {
      name: 'tagnine',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
      selected: false,
      color: 'green',
    },
    {
      name: 'tagten',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
      selected: false,
      color: 'red',
    },
  ];

  useEffect(() => {
    tagsArray.map((item) => set(item.name, item));
  }, []);

  const tagsArrayNames = tagsArray.map((item) => item.name);

  const [showDropDown, setShowDropdown] = useState<boolean>(false);
  const [searchItem, setSearchItem] = useState<string>('');
  const [filteredData, setFilteredData] = useState<string[]>(tagsArrayNames);
  const [checkedValues, setCheckedValues] = useState<string[]>([]);
  const [selectedTags, setselectedTags] = useState<string[]>([]);

  const applyTags = () => {
    setselectedTags(checkedValues);

    //  update data item in indexDB
    checkedValues.map((item) => {
      update(item, (val) => ({
        ...val,
        selected: true,
      }));
    });
  };

  useEffect(() => {
    if (searchItem !== '') {
      const data = tagsArray.filter((item) =>
        item.name.toLocaleLowerCase().startsWith(searchItem),
      );
      setFilteredData(data.map((item) => item.name));
    } else {
      setFilteredData(tagsArrayNames);
    }
  }, [searchItem]);

  const addTags = () => {
    setShowDropdown(!showDropDown);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

  const handleCheckbox = (e: any) => {
    setCheckedValues(e);
  };

  return (
    <div className={styles.tagSection}>
      {selectedTags.map((item) => {
        return (
          <span className={styles.selectedTags} key={item}>
            {item}
          </span>
        );
      })}
      <div className={styles.addTagButton}>
        <Button onClick={addTags}>Add Tags</Button>
        {showDropDown ? (
          <div className={styles.tagsDropdown}>
            <Search
              placeholder="search tags"
              allowClear
              className={styles.searchBar}
              onChange={handleSearch}
            />
            <div className={styles.tagsStyles}>
              <Checkbox.Group
                options={filteredData}
                onChange={handleCheckbox}
                defaultValue={selectedTags}
              />
            </div>
            <Button className={styles.tagsbtn} onClick={applyTags}>
              Apply
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Tags;
