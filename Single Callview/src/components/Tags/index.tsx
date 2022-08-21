import React, { useEffect, useState } from 'react';
import { set, entries, update } from 'idb-keyval';
import { Input, Button, Checkbox, Tag, Popover } from 'antd';
const { Search } = Input;
import styles from './style.module.css';
import Item from 'antd/lib/list/Item';
// import Checkbox from '../common/Checkbox';

const Tags = ({ apiData, tags }: any) => {
  const tagsArray = tags?.map((item: any) => item.name);

  const [showDropDown, setShowDropdown] = useState<boolean>(false);
  const [checkedValues, setCheckedValues] = useState([]);
  const [apply, setApply] = useState(false);
  const [searchItem, setSearchItem] = useState<string>('');
  const [filteredData, setFilteredData] = useState();
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    if (searchItem !== '') {
      const data = tagsArray?.filter((item: any) =>
        item?.toLocaleLowerCase()?.startsWith(searchItem),
      );
      setFilteredData(data);
    } else {
      setFilteredData(tagsArray);
    }
  }, [searchItem]);

  const addTags = () => {
    setShowDropdown(!showDropDown);
  };

  const handleCheckbox = (e: any) => {
    setCheckedValues(e);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

  const applyTags = () => {
    setApply(true);
    setSelectedTags(checkedValues);
  };

  const changeAccurate = () => {
    console.log('accurate');
  };

  const changeInaccurate = () => {
    console.log('inaccurate');
  };

  const deleteTag = (item: string) => {
    const remainingTags = selectedTags.filter((tag) => tag !== item);
    setSelectedTags(remainingTags);
  };

  const content = (item: string) => (
    <div>
      <img
        className={styles.popoverIcon}
        src="/assets/thumbs-up.svg"
        alt="thumbs-up-image"
        onClick={changeAccurate}
      ></img>
      <img
        className={styles.popoverIcon}
        src="/assets/thumbs-down.svg"
        alt="thumbs-down-image"
        onClick={changeInaccurate}
      ></img>
      <img
        className={styles.popoverIcon}
        src="/assets/trash-simple.svg"
        alt="delete-image"
        onClick={() => deleteTag(item)}
      ></img>
    </div>
  );

  return (
    <>
      <div className={styles.tagSection}>
        {apply
          ? selectedTags.map((item: any) => (
              <Popover key={item} content={content(item)}>
                <span className={styles.selectedTags}>{item}</span>
              </Popover>
            ))
          : apiData?.tags?.map((item: any) => (
              <Popover key={item} content={content(item)}>
                <span className={styles.selectedTags} key={item.name}>
                  {item.name}
                </span>
              </Popover>
            ))}
        <div className={styles.addTagButton}>
          <Button onClick={addTags}>Add tags</Button>
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
                  className={styles.checkbox}
                  onChange={handleCheckbox}
                  defaultValue={apiData?.tags?.map((item: any) => item.name)}
                ></Checkbox.Group>
              </div>
              <Button className={styles.tagsbtn} onClick={applyTags}>
                Apply
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Tags;

// const Tags = ({ apiData }: any) => {

//   const tagsArray = apiData?.tags;
//   const tagsNames = tagsArray?.map((item: any) => item.name);

//   useEffect(() => {
//     tagsArray?.map((item: any) => {
//       set(item.name, item);
//     });
//   }, []);

//   const [showDropDown, setShowDropdown] = useState<boolean>(false);
//   const [searchItem, setSearchItem] = useState<string>('');
//   const [filteredData, setFilteredData] = useState<string[]>([]);
//   const [checkedValues, setCheckedValues] = useState<string[]>([]);
//   const [selectedTags, setselectedTags] = useState<string[]>([]);

//   useEffect(() => {
//     if (!searchItem) {
//       console.log(tagsNames);
//       setFilteredData('tags', tagsNames);
//     } else {
//       const data = tagsArray?.filter((item: any) =>
//         item?.name?.toLocaleLowerCase()?.startsWith(searchItem),
//       );
//       console.log('data', data);
//       setFilteredData(data?.map((item: any) => item.name));
//     }
//   }, [searchItem]);

//   const addTags = () => {
//     setShowDropdown(!showDropDown);
//   };

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchItem(e.target.value);
//   };

//   const handleCheckbox = (e: any) => {
//     setCheckedValues(e);
//   };

//   const changeAccurate = () => {
//     console.log('accurate');
//   };

//   const changeInaccurate = () => {
//     console.log('inaccurate');
//   };

//   const applyTags = () => {
//     setselectedTags(checkedValues);

//     //  update data item in indexDB
//     checkedValues.map((item) => {
//       update(item, (val) => ({
//         ...val,
//         selected: true,
//       }));
//     });
//   };

//   const deleteTag = (item: string) => {
//     const remainingTags = selectedTags.filter((tag) => tag !== item);
//     setselectedTags(remainingTags);
//   };

//   const content = (item: string) => (
//     <div>
//       <img
//         className={styles.popoverIcon}
//         src="/assets/thumbs-up.svg"
//         alt="thumbs-up-image"
//         onClick={changeAccurate}
//       ></img>
//       <img
//         className={styles.popoverIcon}
//         src="/assets/thumbs-down.svg"
//         alt="thumbs-down-image"
//         onClick={changeInaccurate}
//       ></img>
//       <img
//         className={styles.popoverIcon}
//         src="/assets/trash-simple.svg"
//         alt="delete-image"
//         onClick={() => deleteTag(item)}
//       ></img>
//     </div>
//   );

//   // return <></>;

//   return (
//     <div className={styles.tagSection}>
//       {selectedTags.map((item) => {
//         return (
//           <Popover key={item} content={content(item)}>
//             <div className={styles.selectedTags}>
//               <span>{item}</span>
//             </div>
//           </Popover>
//         );
//       })}
//       <div className={styles.addTagButton}>
//         <Button onClick={addTags}>Add Tags</Button>
//         {showDropDown ? (
//           <div className={styles.tagsDropdown}>
//             <Search
//               placeholder="search tags"
//               allowClear
//               className={styles.searchBar}
//               onChange={handleSearch}
//             />
//             {console.log('filterData', filteredData)}
//             {filteredData?.map((item) => (
//               <span key={item}>{item}</span>
//             ))}
//             <div className={styles.tagsStyles}>
//               {/* <Checkbox.Group
//                 options={filteredData}
//                 onChange={handleCheckbox}
//                 // defaultValue={selectedTags}
//               /> */}
//             </div>
//             <Button className={styles.tagsbtn} onClick={applyTags}>
//               Apply
//             </Button>
//           </div>
//         ) : null}
//       </div>
//     </div>
//   );
// };

// export default Tags;
