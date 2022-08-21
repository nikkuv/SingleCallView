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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MetaData = ({ apiData }: any) => {
  const [showmore, setShowMore] = useState<boolean>(false);

  // console.log('metadata', apiData.metadataList);

  const handleDisplayOfData = () => {
    setShowMore(!showmore);
  };

  return (
    <>
      <div className={styles.metaData}>
        {showmore
          ? apiData.metadataList.map((item: any) => {
              return (
                <div key={item.title}>
                  <span className={styles.metaDataHeading}>
                    {item.title} :{' '}
                  </span>
                  <span className={styles.metaDataVal}>{item.value}</span>
                </div>
              );
            })
          : apiData.metadataList
              ?.slice(0, Math.ceil(apiData.metadataList.length / 2))
              .map((item: any) => {
                return (
                  <div key={item.title}>
                    <span className={styles.metaDataHeading}>
                      {item.title} :{' '}
                    </span>
                    <span className={styles.metaDataVal}>{item.value}</span>
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

export default MetaData;
