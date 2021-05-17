/* eslint-disable no-console,no-undef,react/prop-types,no-shadow,no-plusplus,react/no-array-index-key */
import React, { useEffect } from 'react';
import {
  Button, Pagination, PaginationItem, PaginationLink, Table 
} from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { apiUrl } from '../Constants/Constants';
import {
  getData, setCurrentPage, setTotalCount, toggleIsFetching
} from '../store/actions';

const mapStateToProps = (state) => {
  return {
    data: state.data.data,
    isFetching: state.data.isFetching,
    totalCount: state.data.totalCount,
    pageSize: state.data.pageSize,
    currentPage: state.data.currentPage
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getAPIData: (data) => {
//       dispatch(getData(data));
//     },
//     setAPICurrentPage: (currentPage) => {
//       dispatch(setCurrentPage(currentPage));
//     },
//     setAPITotalCount: (totalCount) => {
//       dispatch(setTotalCount(totalCount));
//     },
//     toggleAPIIsFetching: (isFetching) => {
//       dispatch(toggleIsFetching(isFetching));
//     }
//   };
// };

const LessonSixHooks = (props) => {
  const { t } = useTranslation('translations');

  const {
    // eslint-disable-next-line no-unused-vars,react/prop-types
    data, isFetching, currentPage, totalCount, getData, setCurrentPage, setTotalCount, toggleIsFetching, pageSize
  } = props;
  
  const pagesCount = Math.ceil(totalCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const dataToShow = data.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );
  
  // const [tracks, setTracks] = useState([]);
  const dragStartHandler = (e, trackId) => {
    const newTracks = data.map((item) => ({
      ...item,
      isActive: (item.trackId || item.collectionId) === trackId,
    }));
    getData(newTracks);
  };

  const dragEndHandler = (e) => {
    e.preventDefault();
    const newTracks = data.map((item) => ({
      ...item,
      isOver: false,
    }));
    getData(newTracks);
  };

  const dragOverHandler = (e, trackId) => {
    e.preventDefault();
    const newTracks = data.map((item) => ({
      ...item,
      isOver: (item.trackId || item.collectionId) === trackId,
    }));
    getData(newTracks);
  };

  const swap = (array, i, j) => {
    // eslint-disable-next-line no-param-reassign
    [array[i], array[j]] = [array[j], array[i]];
    return array;
  };

  const dropHandler = (e, trackToSwap) => {
    e.preventDefault();
    const activeTrack = data.findIndex((x) => x.isActive) + (currentPage * pageSize);
    const swapped = swap([...data], activeTrack, trackToSwap);
    const newTracks = swapped.map((item) => ({
      ...item,
      isOver: false,
      isActive: false,
    }));
    getData(newTracks);
  };

  const onClick = (trackId) => {
    // eslint-disable-next-line react/destructuring-assignment,react/no-access-state-in-setstate
    const newTracks = data.map((item) => ({
      ...item,
      isActive: (item.trackId || item.collectionId) === trackId && !item.isActive,
    }));
    getData(newTracks);
  };

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
  useEffect(() => {
    document.addEventListener('keyup', handleKeyDown);

    return () => {
      document.removeEventListener('keyup', handleKeyDown);
    };
  });
  // document.addEventListener('keyup', handleKeyDown);
  const handleClick = (e, index) => {
    e.preventDefault();
    setCurrentPage(index);
  };

  return (
    <>
      <div>
        <h1>{t('sixthLesson.sixthLessonTitle')}</h1>
        <Button onClick={() => onRefresh()}>
          {isFetching ? 'Loading' : 'Refresh'}
        </Button>
      </div>
      <div className="pagination-wrapper">

        <Pagination aria-label="Page navigation example">

          <PaginationItem disabled={currentPage <= 0}>

            <PaginationLink
              onClick={(e) => handleClick(e, currentPage - 1)}
              previous
              href="#"
            />

          </PaginationItem>

          {[...Array(pagesCount)].map((page, i) => (
            <PaginationItem active={i === currentPage} key={i}>
              <PaginationLink onClick={(e) => handleClick(e, i)} href="#">
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem disabled={currentPage >= pagesCount - 1}>

            <PaginationLink
              onClick={(e) => handleClick(e, currentPage + 1)}
              next
              href="#"
            />

          </PaginationItem>

        </Pagination>

      </div>
      <Table className="myAPITable">
        <thead>
          <tr>
            {t('sixthLesson.tableHeader', { returnObjects: true }).map((i) => (
              <th key={i}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataToShow.map(
            (
              {
                trackId,
                artworkUrl60,
                collectionCensoredName,
                collectionId,
                trackName,
                artistName,
                trackPrice,
                isOver,
                isActive,
              },
              index
            ) => (
              <tr
              /* eslint-disable-next-line react/no-array-index-key */
                key={index}
                className={`${isOver ? 'over' : ''} ${
                  isActive ? 'selected' : ''
                }`}
                draggable
                onDragStart={(e) => dragStartHandler(e, trackId || collectionId)}
                onDragLeave={(e) => dragEndHandler(e)}
                onDragEnd={(e) => dragEndHandler(e, trackId || collectionId)}
                onDragOver={(e) => dragOverHandler(e, trackId || collectionId)}
                onDrop={(e) => dropHandler(e, (index + (currentPage * pageSize)))}
                onClick={() => onClick(trackId || collectionId)}
              >
                <td>
                  <img src={artworkUrl60} alt="img" />
                </td>
                <td>{trackName || collectionCensoredName}</td>
                <td>{artistName}</td>
                <td>
                  {trackPrice}
                  $
                </td>
              </tr>
            )
          )}
        </tbody>
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

export default connect(mapStateToProps, {
  getData, setCurrentPage, setTotalCount, toggleIsFetching
})(LessonSixHooks);
