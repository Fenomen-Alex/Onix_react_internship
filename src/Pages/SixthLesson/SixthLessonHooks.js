/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Table } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchDataThunk,
  getDataAC, setCurrentPageAC, setTotalCountAC, toggleIsFetchingAC
} from '../../store/actions';
import SLHeader from './SLHeader';
import SlPagination from './SLPagination';
import SlTableHeader from './SLTableHeader';
import SlTable from './SLTable';

const mapStateToProps = (state) => ({
  data: state.data.data,
  isFetching: state.data.isFetching,
  totalCount: state.data.totalCount,
  pageSize: state.data.pageSize,
  currentPage: state.data.currentPage
});

const mapDispatchToProps = ({
  getData: getDataAC,
  setCurrentPage: setCurrentPageAC,
  setTotalCount: setTotalCountAC,
  toggleIsFetching: toggleIsFetchingAC,
  fetchData: fetchDataThunk
});

const LessonSixHooks = (props) => {
  const { t } = useTranslation('translations');

  const {
    data, isFetching, currentPage, totalCount, getData, setCurrentPage, toggleIsFetching, pageSize, fetchData
  } = props;

  const handleKeyDown = (e) => {
    const { keyCode } = e;
    const currentIndex = data.findIndex((item) => item.isActive) || 0;
    let direction = 0;
    switch (keyCode) {
      case 38:
        direction = -1;
        break;
      case 40:
        direction = 1;
        break;
      default:
        break;
    }
    const nextIndex = currentIndex + direction;
    if (data[nextIndex]) {
      const newTracks = data.map((item, index) => ({
        ...item,
        isActive: index === nextIndex,
      }));
      getData(newTracks);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onLoad = () => {
    console.log('Image loaded');
  };

  const onError = () => {
    console.log('Image not loaded');
  };
  
  useEffect(() => {
    document.addEventListener('keyup', handleKeyDown);

    return () => {
      document.removeEventListener('keyup', handleKeyDown);
    };
  });

  return (
    <>
      <SLHeader
        isFetching={isFetching} 
        toggleIsFetching={toggleIsFetching}
        getData={getData}
        fetchData={fetchData}
      />
      <SlPagination
        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={pageSize}
        setCurrentPage={setCurrentPage}
      />
      <Table className="myAPITable">
        <SlTableHeader t={t} />
        <SlTable
          data={data} 
          currentPage={currentPage} 
          pageSize={pageSize} 
          getData={getData}
        />
      </Table>
      <img
        src="https://emojio.ru/images/apple-b/2705.png"
        onLoad={onLoad}
        onError={onError}
        alt="okay"
      />
    </>
  );
};

LessonSixHooks.defaultProps = {
  currentPage: 0,
  data: [{}],
  pageSize: 10,
  getData: getDataAC,
  isFetching: false,
  totalCount: 0,
  setCurrentPage: setCurrentPageAC,
  toggleIsFetching: toggleIsFetchingAC,
  fetchData() {}
};

LessonSixHooks.propTypes = {
  currentPage: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.object),
  pageSize: PropTypes.number,
  getData: PropTypes.func,
  isFetching: PropTypes.bool,
  totalCount: PropTypes.number,
  setCurrentPage: PropTypes.func,
  toggleIsFetching: PropTypes.func,
  fetchData: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(LessonSixHooks);
