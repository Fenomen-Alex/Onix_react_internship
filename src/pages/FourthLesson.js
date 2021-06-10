import React from 'react';

import { Button, Table } from 'reactstrap';

const starWarsData = [
  { id: 2, year: 2017, film: 'Звёздные войны. Эпизод VIII: Последние джедаи' },
  { id: 1, year: 2015, film: 'Авёздные войны. Эпизод VII: Пробуждение Силы' },
  { id: 3, year: 2019, film: 'Звёздные войны. Эпизод IX: Скайуокер. Восход' },
];

const asc = 'asc';
const desc = 'desc';
class FilmTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yearDirection: asc,
      filmDirection: asc,
      data: starWarsData,
      filmInputYear: '',
      filmInputText: '',
    };
  }

  sortByClick = (sortByFilm = false) => {
    const { data } = this.state;
    if (sortByFilm) {
      return this.setState({ data: this.sortByFilm([...data], 'film') });
    }
    return this.setState({ data: data.sort(this.sortByYear) });
  };

  sortByYear = (a, b) => {
    const { yearDirection } = this.state;
    let result = 0;
    if (a.year < b.year) {
      result = yearDirection === asc ? -1 : 1;
    }
    if (a.year > b.year) {
      result = yearDirection === asc ? 1 : -1;
    }
    this.setState({ yearDirection: yearDirection === asc ? desc : asc });
    return result;
  };

  sortByFilm = (array, field) => {
    const { filmDirection } = this.state;
    const n = array.length;
    for (let i = 0; i < n - 1; i + 1) {
      let min = i;
      for (let j = i + 1; j < n; j + 1) {
        if (filmDirection === asc && array[j][field] < array[min][field]) {
          min = j;
        }
        if (filmDirection === desc && array[j][field] > array[min][field]) {
          min = j;
        }
      }
      const t = array[min];
      // eslint-disable-next-line no-param-reassign
      array[min] = array[i];
      // eslint-disable-next-line no-param-reassign
      array[i] = t;
    }
    this.setState({ filmDirection: filmDirection === asc ? desc : asc });
    return array;
  };

  addRow = () => {
    const { data } = this.state;
    this.setState({ data: [...data, { year: 'Year', film: 'Film' }] });
  }

  // eslint-disable-next-line consistent-return
  addByClick = () => {
    const { filmInputYear, filmInputText, data } = this.state;
    if (filmInputYear.length !== 4 || filmInputText.length < 5) {
      return false;
    }
    this.setState({
      filmInputYear: '',
      filmInputText: '', 
      data: [...data, { year: filmInputYear, film: filmInputText }] 
    });
  };

  removeById = (id) => {
    const { data } = this.state;
    this.setState({ data: data.filter((item) => item.id !== id) });
  }

  removeLastInArray = () => {
    const { data } = this.state;
    this.setState({ data: data.slice(0, -1) });
  };

  handleInputChange = (e, field) => {
    this.setState({ [field]: e.target.value });
  }

  render() {
    const { filmInputYear, filmInputText, data } = this.state;
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */
    return (
      <div>
        <Table className="myTable">
          <thead>
            <tr>
              <th>
                <Button color="secondary" onClick={() => this.sortByClick()}>
                  Years
                </Button>
              </th>
              <th>
                <Button color="secondary" onClick={() => this.sortByClick(true)}>
                  Films
                </Button>
              </th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.year}</td>
                <td>{item.film}</td>
                {/* eslint-disable-next-line max-len */}
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                <td onClick={() => this.removeById(item.id)}>-</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <input
          type="text" 
          placeholder="Year" 
          value={filmInputYear} 
          onChange={(e) => this.handleInputChange(e, 'filmInputYear')}
        />
        <input
          type="text" 
          placeholder="Film" 
          value={filmInputText} 
          onChange={(e) => this.handleInputChange(e, 'filmInputText')}
        />
        <Button color="primary" onClick={this.addByClick}>
          Add
        </Button>
        <Button color="primary" onClick={this.removeLastInArray}>
          Delete
        </Button>
        <p>To find more - go to the console</p>
      </div>
    );
  }
}

const LessonFour = () => {
  return (
    <div className="lessonFour">
      <h1>Lesson 4</h1>
      <FilmTable />
    </div>
  );
};

export default LessonFour;
