/* eslint-disable no-console */
import React from 'react';
import { Button, Table } from 'reactstrap';
import StyledTheme from '../components/StyledWrapper';
import { starWarsOriginal, starWarsPrequel, starWarsSequel } from '../constants/constants';

class FilmTable extends React.Component {
  data = starWarsOriginal.concat(starWarsPrequel, starWarsSequel);

  constructor(props) {
    super(props);
    this.sortByClick = this.sortByClick.bind(this);
    // eslint-disable-next-line react/no-unused-state
    this.state = { sorted: true };
  }

  sortByClick = () => {
    const { state } = this.state;
    this.setState(() => ({
      // eslint-disable-next-line react/no-unused-state
      sorted: !state.sorted,
    }));
    if (state.sorted) {
      return this.data.reverse();
    }
    return this.data.sort();
  };

  addByClick = () => {
    this.setState(() => ({
      // eslint-disable-next-line no-plusplus,react/no-unused-state
      added: ++this.added,
    }));
    return this.data.push(['year', 'film']);
  };

  removeByClick = () => {
    const { state } = this.state;
    this.setState(() => ({
      // eslint-disable-next-line react/no-unused-state,no-plusplus
      removed: ++this.removed,
    }));
    if (state.sorted) {
      return this.data.pop();
    }
    return this.data.shift();
  };

  render() {
    return (
      <div>
        <Table className="myTable">
          <thead>
            <tr>
              <th>
                <Button color="secondary" onClick={this.sortByClick}>
                  Years
                </Button>
              </th>
              <th>
                <Button color="secondary" onClick={this.sortByClick}>
                  Films
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.data.map((numList, key) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={key}>
                {numList.map((num, j) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <td key={j}>{num}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
        <Button color="primary" onClick={this.addByClick}>
          Add
        </Button>
        <Button color="primary" onClick={this.removeByClick}>
          Delete
        </Button>
      </div>
    );
  }
}

const starWarsAll = starWarsOriginal.concat(starWarsSequel, starWarsPrequel);
const starWarsRev = starWarsAll.reverse();
function SelectionSort(A) {
  const n = A.length;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    // eslint-disable-next-line no-plusplus
    for (let j = i + 1; j < n; j++) {
      if (A[j][0] < A[min][0]) min = j;
    }
    const t = A[min];
    // eslint-disable-next-line no-param-reassign
    A[min] = A[i];
    // eslint-disable-next-line no-param-reassign
    A[i] = t;
  }
  return A;
}
SelectionSort(starWarsRev);

const LessonThree = (props) => {
  console.log('PPPP', props);
  console.log(starWarsRev);
  console.log(
    [
      3,
      6,
      2,
      4,
      8,
      3,
      5,
      5,
      5,
      7,
      8,
      3,
      34,
      534,
      6,
      5474,
      5,
      5485,
      623,
      423,
      346,
      867,
      679,
      780,
      34,
      346,
    ].sort()
  );
  console.log(
    [21, 58, 1, 588, 465, 589, 65, 7, 6, 5, 358, 47, 69].sort((a, b) => a - b)
  );
  return (
    // eslint-disable-next-line react/destructuring-assignment,react/prop-types
    <div className={`${props.theme} lessonThree`}>
      <h1>Lesson 3</h1>
      <FilmTable />
    </div>
  );
};

export default StyledTheme(LessonThree);
