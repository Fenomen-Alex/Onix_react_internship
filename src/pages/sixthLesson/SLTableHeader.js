/* eslint-disable react/prop-types */
import React from 'react';

const SlTableHeader = (props) => {
  const { t } = props;
  return (
    <thead>
      <tr>
        {t('sixthLesson.tableHeader', { returnObjects: true }).map((i) => (
          <th key={i}>{i}</th>
        ))}
      </tr>
    </thead>
  );
};

export default SlTableHeader;
