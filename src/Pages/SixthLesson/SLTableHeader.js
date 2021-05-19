import React from 'react';
import PropTypes from 'prop-types';

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

SlTableHeader.defaultProps = { t() {} };

SlTableHeader.propTypes = { t: PropTypes.func };

export default SlTableHeader;
