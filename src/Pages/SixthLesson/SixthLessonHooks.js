/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Table } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { apiUrl } from '../../constants/constants';
import {
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
  toggleIsFetching: toggleIsFetchingAC
});

const LessonSixHooks = (props) => {
  const { t } = useTranslation('translations');

  const {
    data, isFetching, currentPage, totalCount, getData, setCurrentPage, setTotalCount, toggleIsFetching, pageSize
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
    toggleIsFetching(true);
    fetch(apiUrl)
      .then((response) => response.json())
      .then(
        (res) => {
          getData(
            res.results.map((item) => ({
              ...item,
              isActive: false,
              isOver: false,
            })),
          );
          toggleIsFetching(false);
          setTotalCount(res.resultCount);
        },
        (error) => {
          console.log(`Error : ${error}`);
        }
      );
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
  setTotalCount: setTotalCountAC,
  toggleIsFetching: toggleIsFetchingAC
};

LessonSixHooks.propTypes = {
  currentPage: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.object),
  pageSize: PropTypes.number,
  getData: PropTypes.func,
  isFetching: PropTypes.bool,
  totalCount: PropTypes.number,
  setCurrentPage: PropTypes.func,
  setTotalCount: PropTypes.func,
  toggleIsFetching: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(LessonSixHooks);
