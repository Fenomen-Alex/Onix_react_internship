/* eslint-disable no-console */
import React from 'react';
import { Button } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { apiUrl } from '../../constants/constants';

const SLHeader = (props) => {
  const { t } = useTranslation('translations');
  const { isFetching, toggleIsFetching, getData } = props;

  const onRefresh = async () => {
    await toggleIsFetching(true);
    await fetch(apiUrl)
      .then((response) => response.json())
      .then(
        (res) => getData(
          res.results.map((item) => ({
            ...item,
            isActive: false,
            isOver: false,
          })),
        ),
        (error) => {
          console.log(`Error : ${error}`);
        }
      );
    await toggleIsFetching(false);
  };
  return (
    <div>
      <h1>{t('sixthLesson.sixthLessonTitle')}</h1>
      <Button onClick={() => onRefresh()}>
        {isFetching ? <i className="fa fa-spinner fa-spin" /> : 'Refresh'}
      </Button>
    </div>
  );
};

SLHeader.defaultProps = {
  isFetching: false,
  toggleIsFetching() {},
  getData() {}
};

SLHeader.propTypes = {
  isFetching: PropTypes.bool,
  toggleIsFetching: PropTypes.func,
  getData: PropTypes.func
};

export default SLHeader;
