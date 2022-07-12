import { Button } from 'antd';
import React, { useState } from 'react';
import styles from './style.module.css';

type metaDataInterface = {
  objectKey: string;
  val: string;
};

const metaData: metaDataInterface[] = [
  {
    objectKey: 'Ticket Update ID',
    val: '-',
  },
  {
    objectKey: 'Contact Type',
    val: '-',
  },
  {
    objectKey: 'Ticket Form',
    val: '-',
  },
  {
    objectKey: 'Wrapup Percentage',
    val: '-',
  },
  {
    objectKey: 'Agent Disposition',
    val: 'Not Available',
  },
  {
    objectKey: 'Campaign Name',
    val: '115245665',
  },
  {
    objectKey: 'Service Name',
    val: 'Chat Basic Service',
  },
  {
    objectKey: 'Phone Number',
    val: '-',
  },
  {
    objectKey: 'Filename',
    val: '-',
  },
  {
    objectKey: 'State',
    val: '-',
  },
  {
    objectKey: 'Public Comment',
    val: '-',
  },
  {
    objectKey: 'Ticket Channel',
    val: '-',
  },
  {
    objectKey: 'Wrap Up Length',
    val: '-',
  },
  {
    objectKey: 'Borrower Account',
    val: '-',
  },
  {
    objectKey: 'Percent Silence',
    val: '-',
  },
  {
    objectKey: 'Percent Overtalk ',
    val: '-',
  },
  {
    objectKey: 'Call Id',
    val: '052ce1a0-8e52-42e2-a79a-6696f66e265d',
  },
];

const SingleCallView = () => {
  const [showmore, setShowMore] = useState(false);

  const handleDisplayOfData = () => {
    setShowMore(!showmore);
  };

  return (
    <>
      <div className={styles.metaData}>
        {showmore
          ? metaData.map((item) => {
              return (
                <div key={item.objectKey}>
                  <span className={styles.metaDataHeading}>
                    {item.objectKey} :{' '}
                  </span>
                  <span className={styles.metaDataVal}>{item.val}</span>
                </div>
              );
            })
          : metaData.slice(0, Math.ceil(metaData.length / 2)).map((item) => {
              return (
                <div key={item.objectKey}>
                  <span className={styles.metaDataHeading}>
                    {item.objectKey} :{' '}
                  </span>
                  <span className={styles.metaDataVal}>{item.val}</span>
                </div>
              );
            })}
      </div>
      <div className={styles.showmoreBtn}>
        <Button onClick={handleDisplayOfData}>
          {showmore ? 'show less' : 'show more'}
        </Button>
      </div>
    </>
  );
};

export default SingleCallView;
