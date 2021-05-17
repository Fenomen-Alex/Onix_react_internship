/* eslint-disable react/prop-types */
import React from 'react';

const SlTable = (props) => {
  const {
    data, currentPage, pageSize, getData 
  } = props;
  const dataToShow = data.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

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
    const activeTrack = dataToShow.findIndex((x) => x.isActive) + (currentPage * pageSize);
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
  
  return (
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

  );
};

export default SlTable;
