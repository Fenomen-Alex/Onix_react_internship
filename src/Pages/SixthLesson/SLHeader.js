/* eslint-disable no-console */
import React from 'react';
import { Button } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const SLHeader = (props) => {
  const { t } = useTranslation('translations');
  const { isFetching, fetchData } = props;

  return (
    <div>
      <h1>{t('sixthLesson.sixthLessonTitle')}</h1>
      <Button onClick={fetchData}>
        {isFetching ? <i className="fa fa-spinner fa-spin" /> : 'Refresh'}
      </Button>
    </div>
  );
};

SLHeader.defaultProps = {
  isFetching: false,
  fetchData() {}
};

SLHeader.propTypes = {
  isFetching: PropTypes.bool,
  fetchData: PropTypes.func,

};

export default SLHeader;
