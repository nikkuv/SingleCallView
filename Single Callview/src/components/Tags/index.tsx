import React, { useEffect, useState } from 'react';
import { set, entries, update } from 'idb-keyval';
import { Input, Checkbox, Button } from 'antd';
const { Search } = Input;
import styles from './style.module.css';

type tagsObject = {
  name: string;
  accurate: boolean;
  inaccurate: boolean;
  description: string;
  selected?: boolean;
};

function Tags() {
  const tagsArray: tagsObject[] = [
    {
      name: 'tagfirst',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
    },
    {
      name: 'tagsecond',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
    },
    {
      name: 'tagthird',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
    },
    {
      name: 'tagforth',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
    },
    {
      name: 'tagfive',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
    },
    {
      name: 'tagsix',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
    },
    {
      name: 'tagseven',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
    },
    {
      name: 'tageight',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
    },
    {
      name: 'tagnine',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
    },
    {
      name: 'tagten',
      accurate: false,
      inaccurate: false,
      description: 'some feedback',
    },
  ];

  const [showDropDown, setShowDropdown] = useState<boolean>(false);
  const [searchItem, setSearchItem] = useState<string>('');
  const [filteredData, setFilteredData] = useState(tagsArray);
  const [selectedTags, setselectedTags] = useState<tagsObject[]>([]);

  tagsArray.map((item) => {
    set(item.name, item);
  });

  const getAllValuesFromDB = () => {
    entries().then((entries) => {
      const res = entries
        .map((item) => item[1])
        .filter((item) => item.selected);
      setselectedTags(res);
    });
  };

  useEffect(() => {
    if (searchItem !== '') {
      const data = tagsArray.filter((item) =>
        item.name.toLocaleLowerCase().startsWith(searchItem),
      );
      setFilteredData(data);
    } else {
      setFilteredData(tagsArray);
    }
  }, [searchItem]);

  const addTags = () => {
    setShowDropdown(!showDropDown);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

  const handleCheckbox = (e: any) => {
    const res = filteredData.map((item) => {
      if (item.name === e.target.value) {
        // update data item in indexDB
        update(item.name, (val) => ({
          ...val,
          selected: true,
        }));
        return { ...item, selected: true };
      } else {
        return item;
      }
    });
  };

  return (
    <div className={styles.tagSection}>
      {selectedTags.length > 0
        ? selectedTags.map((item) => (
            <span className={styles.selectedTags} key={item.name}>
              {item.name}
            </span>
          ))
        : null}
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
            {filteredData.map((item) => {
              return (
                <div key={item.name}>
                  <Checkbox onChange={handleCheckbox} value={item.name}>
                    {item.name}
                  </Checkbox>
                </div>
              );
            })}
          </div>
          <Button className={styles.tagsbtn} onClick={getAllValuesFromDB}>
            Apply
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default Tags;
