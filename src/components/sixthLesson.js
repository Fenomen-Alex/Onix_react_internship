import React from "react";

import { Table } from "reactstrap";

const apiUrl =
  "https://itunes.apple.com/search?term=star+wars&limit=25&entity=song";
const tableHeader = ["Image", "Track Title", "Artist Name", "Price"];
class TableFromITunes extends React.Component {
  state = {
    tracks: [],
    activeTrackId: null,
    activeTrackClass: "",
    errorMessage: null,
  };

  componentDidMount() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then(
        (res) =>
          this.setState({
            tracks: res.results.map((item) => ({
              ...item,
              isActive: false,
              isOver: false,
            })),
          }),
        (error) => {
          this.setState({ errorMessage: error });
          console.log(this.state.errorMessage);
        }
      );
    document.addEventListener("keyup", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keyup", this.handleKeyDown);
  }
  dragStartHandler(e, trackId) {
    const newTracks = this.state.tracks.map((item) => ({
      ...item,
      isActive: item.trackId === trackId,
    }));
    this.setState({ tracks: newTracks });
  }

  dragEndHandler(e) {
    e.preventDefault();
    const newTracks = this.state.tracks.map((item) => ({
      ...item,
      isOver: false,
    }));
    this.setState({ tracks: newTracks });
  }

  dragOverHandler(e, trackId) {
    e.preventDefault();
    const newTracks = this.state.tracks.map((item) => ({
      ...item,
      isOver: item.trackId === trackId,
    }));
    this.setState({ tracks: newTracks });
  }
  swap = (array, i, j) => {
    [array[i], array[j]] = [array[j], array[i]];
    return array;
  };
  dropHandler(e, trackToSwap) {
    e.preventDefault();
    const { tracks } = this.state;
    let activeTrack = tracks.findIndex((x) => x.isActive);
    const swapped = this.swap([...tracks], activeTrack, trackToSwap);
    const newTracks = swapped.map((item) => ({
      ...item,
      isOver: false,
      isActive: false,
    }));
    this.setState({ draged: !this.state.draged, tracks: newTracks });
  }

  //   sortRows = (rowA, rowB) => {
  //     if (this.state.tracks.indexOf(rowA) > this.state.tracks.indexOf(rowB)) {
  //       return 1;
  //     } else {
  //       return -1;
  //     }
  //   };

  onClick = (trackId) => {
    const newTracks = this.state.tracks.map((item) => ({
      ...item,
      isActive: item.trackId === trackId && !item.isActive,
    }));
    this.setState({
      tracks: newTracks,
    });
  };

  handleKeyDown = (e) => {
    const { keyCode } = e;
    const { tracks } = this.state;
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
      this.setState({
        tracks: newTracks,
      });
    }
  };

  onLoad = () => {
    console.log("Image loaded");
  };

  onError = () => {
    console.log("Image not loaded");
  };

  render() {
    const { tracks, errorMessage } = this.state;
    console.log("tracks", tracks);
    return (
      <>
        {errorMessage && <div className="alert">{errorMessage.message}</div>}
        {!errorMessage && (
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
                    trackName,
                    artistName,
                    trackPrice,
                    isOver,
                    isActive,
                  },
                  index
                ) => (
                  <tr
                    key={index}
                    className={`${isOver ? "over" : ""} ${
                      isActive ? "selected" : ""
                    }`}
                    draggable={true}
                    onDragStart={(e) => this.dragStartHandler(e, trackId)}
                    onDragLeave={(e) => this.dragEndHandler(e)}
                    onDragEnd={(e) => this.dragEndHandler(e, trackId)}
                    onDragOver={(e) => this.dragOverHandler(e, trackId)}
                    onDrop={(e) => this.dropHandler(e, index)}
                    onClick={() => this.onClick(trackId)}
                  >
                    <td>
                      <img src={artworkUrl60} alt="img" />
                    </td>
                    <td>{trackName}</td>
                    <td>{artistName}</td>
                    <td>{trackPrice}$</td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        )}
        <img
          src="https://emojio.ru/images/apple-b/2705.png"
          onLoad={this.onLoad}
          onError={this.onError}
          alt="okay"
        />
      </>
    );
  }
}

const LessonSix = () => {
  return (
    <div className="lesson-six">
      <h1>Lesson 6</h1>
      <TableFromITunes />
    </div>
  );
};

export default LessonSix;
