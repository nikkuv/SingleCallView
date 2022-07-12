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
      selected: true,
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

  tagsArray.map((item) => {
    set(item.name, item);
  });

  // const checkboxValues = tagsArray.map((item) => item.name);

  const [showDropDown, setShowDropdown] = useState<boolean>(false);
  const [searchItem, setSearchItem] = useState<string>('');
  const [filteredData, setFilteredData] = useState<tagsObject[]>(tagsArray);
  const [dataFromDB, serDataFromDB] = useState<string[]>([]);

  const getAllValuesFromDB = () => {
    entries().then((entries) => {
      const res: string[] = entries
        .map((item) => item[1])
        .filter((item) => item.selected)
        .map((item) => item.name);
      serDataFromDB(res);
    });
  };

  const [selectedTags, setselectedTags] = useState<string[]>(dataFromDB);

  useEffect(() => {
    if (searchItem !== '') {
      const data = tagsArray.filter((item) =>
        item.name.toLocaleLowerCase().startsWith(searchItem),
      );
      setFilteredData(data);
    } else {
      setFilteredData(tagsArray);
    }
    // if (searchItem !== '') {
    //   const data = checkboxValues.filter((item) =>
    //     item.toLocaleLowerCase().startsWith(searchItem),
    //   );
    //   setFilteredData(data);
    // } else {
    //   setFilteredData(checkboxValues);
    // }
  }, [searchItem]);

  const addTags = () => {
    setShowDropdown(!showDropDown);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

  const handleCheckbox = (e: any) => {
    console.log(e);
  };

  // const handleCheckbox = (e: any) => {
  //   const res = filteredData.map((item) => {
  //     if (item.name === e.target.value) {
  //       // update data item in indexDB
  //       update(item.name, (val) => ({
  //         ...val,
  //         selected: true,
  //       }));
  //       return { ...item, selected: true };
  //     } else {
  //       return item;
  //     }
  //   });
  // };

  return (
    <div className={styles.tagSection}>
      {/* {console.log(selectedTags)} */}
      {/* {selectedTags.map((item) => (
        <Tag key={item}>{item}</Tag>
        // <span className={styles.selectedTags} key={item.name}>
        //   {item.name}
        // </span>
      ))} */}
      {/* {selectedTags.length > 0
        ? selectedTags.map((item) => (
            <Tag key={item}>{item}</Tag>
            // <span className={styles.selectedTags} key={item.name}>
            //   {item.name}
            // </span>
          ))
        : null} */}
      <Button className={styles.addTagButton} onClick={addTags}>
        Add Tags
      </Button>
      {showDropDown ? (
        <div className={styles.tagsDropdown}>
          <Search
            placeholder="search tags"
            allowClear
            className={styles.searchBar}
            onChange={handleSearch}
          />
          <div className={styles.tagsStyles}>
            {/* <Checkbox.Group
              options={filteredData}
              onChange={handleCheckbox}
              defaultValue={selectedTags}
            /> */}
            {filteredData.map((item) => {
              return (
                <div key={item.name}>
                  <Checkbox onChange={handleCheckbox}>{item.name}</Checkbox>
                </div>
              );
            })}
          </div>
          {getAllValuesFromDB()}
          <Button className={styles.tagsbtn}>Apply</Button>
        </div>
      ) : null}
    </div>
  );
}

export default Tags;
