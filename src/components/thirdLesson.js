import React from "react";

import { Button } from "reactstrap";

const starWarsOriginal = [
  [1977, "Звёздные войны. Эпизод IV: Новая надежда"],
  [1980, "Звёздные войны. Эпизод V: Империя наносит ответный удар"],
  [1983, "Звёздные войны. Эпизод VI: Возвращение джедая"],
];
const starWarsPrequel = [
  [1999, "Звёздные войны. Эпизод I: Скрытая угроза"],
  [2002, "Звёздные войны. Эпизод II: Атака клонов"],
  [2005, "Звёздные войны. Эпизод III: Месть ситхов"],
];
const starWarsSequel = [
  [2015, "Звёздные войны. Эпизод VII: Пробуждение Силы"],
  [2017, "Звёздные войны. Эпизод VIII: Последние джедаи"],
  [2019, "Звёздные войны. Эпизод IX: Скайуокер. Восход"],
];

class Table extends React.Component {
  data = starWarsOriginal.concat(starWarsPrequel, starWarsSequel);
  constructor(props) {
    super(props);
    this.sortByClick = this.sortByClick.bind(this);
    this.state = { sorted: true };
  }

  sortByClick = () => {
    this.setState((state) => ({
      sorted: !this.sorted,
    }));
    if (this.state.sorted) {
      return this.data.reverse();
    }
    return this.data.sort();
  };

  addByClick = () => {
    this.setState((state) => ({
      added: ++this.added,
    }));
    return this.data.push(["year", "film"]);
  };

  removeByClick = () => {
    this.setState((state) => ({
      removed: ++this.removed,
    }));
    if (this.state.sorted) {
      return this.data.pop();
    }
    return this.data.shift();
  };

  render() {
    return (
      <div>
        <table className="myTable">
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
            {this.data.map((numList, i) => (
              <tr key={i}>
                {numList.map((num, j) => (
                  <td key={j}>{num}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
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

let starWarsAll = starWarsOriginal.concat(starWarsSequel, starWarsPrequel);
let starWarsRev = starWarsAll.reverse();
function SelectionSort(A) {
  var n = A.length;
  for (var i = 0; i < n - 1; i++) {
    var min = i;
    for (var j = i + 1; j < n; j++) {
      if (A[j] < A[min]) min = j;
    }
    var t = A[min];
    A[min] = A[i];
    A[i] = t;
  }
  return A;
}
SelectionSort(starWarsRev);

const LessonThree = () => {
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
    <div className="lessonThree">
      <h1>Lesson 3</h1>
      <Table />
    </div>
  );
};

export default LessonThree;
