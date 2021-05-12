/* eslint-disable no-console,no-undef */
import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { apiUrl, tableHeader } from '../Constants/Constants';

const LessonSixHooks = () => {
  const { t } = useTranslation('translations');

  const [tracks, setTracks] = useState([]);

  const dragStartHandler = (e, trackId) => {
    const newTracks = tracks.map((item) => ({
      ...item,
      isActive: item.trackId === trackId,
    }));
    setTracks(newTracks);
  };

  const dragEndHandler = (e) => {
    e.preventDefault();
    const newTracks = tracks.map((item) => ({
      ...item,
      isOver: false,
    }));
    setTracks(newTracks);
  };

  const dragOverHandler = (e, trackId) => {
    e.preventDefault();
    const newTracks = tracks.map((item) => ({
      ...item,
      isOver: item.trackId === trackId,
    }));
    setTracks(newTracks);
  };

  const swap = (array, i, j) => {
    // eslint-disable-next-line no-param-reassign
    [array[i], array[j]] = [array[j], array[i]];
    return array;
  };

  const dropHandler = (e, trackToSwap) => {
    e.preventDefault();
    const activeTrack = tracks.findIndex((x) => x.isActive);
    const swapped = swap([...tracks], activeTrack, trackToSwap);
    const newTracks = swapped.map((item) => ({
      ...item,
      isOver: false,
      isActive: false,
    }));
    setTracks(newTracks);
  };

  const onClick = (trackId) => {
    // eslint-disable-next-line react/destructuring-assignment,react/no-access-state-in-setstate
    const newTracks = tracks.map((item) => ({
      ...item,
      isActive: item.trackId === trackId && !item.isActive,
    }));
    setTracks(newTracks);
  };

  const handleKeyDown = (e) => {
    const { keyCode } = e;
    const currentIndex = tracks.findIndex((x) => x.isActive) || 0;
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
    if (tracks[nextIndex]) {
      const newTracks = tracks.map((item, index) => ({
        ...item,
        isActive: index === nextIndex,
      }));
      setTracks(newTracks);
    }
  };

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then(
        (res) => setTracks(
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
    document.addEventListener('keyup', handleKeyDown);
    return () => document.removeEventListener('keyup', handleKeyDown);
  });

  const onLoad = () => {
    console.log('Image loaded');
  };

  const onError = () => {
    console.log('Image not loaded');
  };

  return (
    <>
      <h1>{t('sixthLesson.sixthLessonTitle')}</h1>
      <Table className="myAPITable">
        <thead>
          <tr>
            {tableHeader.map((i) => (
              <th key={i}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tracks.map(
            (
              {
                trackId,
                artworkUrl60,
                collectionCensoredName,
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
                onDragStart={(e) => dragStartHandler(e, trackId)}
                onDragLeave={(e) => dragEndHandler(e)}
                onDragEnd={(e) => dragEndHandler(e, trackId)}
                onDragOver={(e) => dragOverHandler(e, trackId)}
                onDrop={(e) => dropHandler(e, index)}
                onClick={() => onClick(trackId)}
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

export default LessonSixHooks;
