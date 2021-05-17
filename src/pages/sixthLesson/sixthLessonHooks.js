/* eslint-disable no-console,no-undef,
react/prop-types,no-shadow,no-plusplus,react/no-array-index-key,react/jsx-indent-props */
import React, { useEffect } from 'react';
import { Table } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { apiUrl } from '../../Constants/Constants';
import {
  getData, setCurrentPage, setTotalCount, toggleIsFetching
} from '../../store/actions';
import SLHeader from './SLHeader';
import SlPagination from './SLPagination';
import SlTableHeader from './SLTableHeader';
import SlTable from './SLTable';

const mapStateToProps = (state) => {
  return {
    data: state.data.data,
    isFetching: state.data.isFetching,
    totalCount: state.data.totalCount,
    pageSize: state.data.pageSize,
    currentPage: state.data.currentPage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (data) => {
      dispatch(getData(data));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPage(currentPage));
    },
    setTotalCount: (totalCount) => {
      dispatch(setTotalCount(totalCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetching(isFetching));
    }
  };
};

const LessonSixHooks = (props) => {
  const { t } = useTranslation('translations');

  const {
    // eslint-disable-next-line no-unused-vars,react/prop-types
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

    // document.addEventListener('keyup', handleKeyDown);
    // return () => document.removeEventListener('keyup', handleKeyDown);
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
  // document.addEventListener('keyup', handleKeyDown);

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

export default connect(mapStateToProps, mapDispatchToProps)(LessonSixHooks);
