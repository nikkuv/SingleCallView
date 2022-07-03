import React from 'react';

type metaDataInterface = {
  objectKey: string;
  val: string;
};

const metaData: metaDataInterface[] = [
  {
    objectKey: 'Ticket Update ID',
    val: '',
  },
  {
    objectKey: 'Contact Type',
    val: '',
  },
  {
    objectKey: 'Ticket Form',
    val: '',
  },
  {
    objectKey: 'Wrapup Percentage',
    val: '',
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
    objectKey: 'Ticket Update ID',
    val: '',
  },
  {
    objectKey: 'Phone Number',
    val: '',
  },
  {
    objectKey: 'Filename',
    val: '',
  },
  {
    objectKey: 'State',
    val: '',
  },
  {
    objectKey: 'Public Comment',
    val: '',
  },
  {
    objectKey: 'Ticket Channel',
    val: '',
  },
  {
    objectKey: 'Wrap Up Length',
    val: '',
  },
  {
    objectKey: 'Borrower Account',
    val: '',
  },
  {
    objectKey: 'Percent Silence',
    val: '',
  },
  {
    objectKey: 'Percent Overtalk ',
    val: '',
  },
  {
    objectKey: 'Call Id',
    val: '052ce1a0-8e52-42e2-a79a-6696f66e265d',
  },
];

function SingleCallView() {
  return (
    <div>
      {metaData
        .filter((i) => i.val)
        .map((item) => {
          return (
            <div key={item.objectKey}>
              <span>{item.objectKey}</span>
              <span>{item.val}</span>
            </div>
          );
        })}
    </div>
  );
}

export default SingleCallView;
