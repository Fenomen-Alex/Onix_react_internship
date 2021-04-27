import React, { useState } from 'react';

import { Button, Table } from 'reactstrap';

const starWarsData = [
  { id: 2, year: 2017, film: 'Звёздные войны. Эпизод VIII: Последние джедаи' },
  { id: 1, year: 2015, film: 'Авёздные войны. Эпизод VII: Пробуждение Силы' },
  { id: 3, year: 2019, film: 'Звёздные войны. Эпизод IX: Скайуокер. Восход' },
];

const asc = 'asc';
const desc = 'desc';

const LessonFourHooks = () => {
  const [data, setData] = useState(starWarsData);
  
  const [filmDirection, setFilmDirection] = useState(asc);

  const [yearDirection, setYearDirection] = useState(asc);

  const sortByYear = (a, b) => {
    let result = 0;
    if (a.year < b.year) {
      result = yearDirection === asc ? -1 : 1;
    }
    if (a.year > b.year) {
      result = yearDirection === asc ? 1 : -1;
    }
    setYearDirection(yearDirection === asc ? desc : asc);
    return result;
  };

  // eslint-disable-next-line no-unused-vars
  const sortByFilm = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i + 1) {
      let min = i;
      for (let j = i + 1; j < n; j + 1) {
        if (filmDirection === asc && array[j] < array[min]) {
          min = j;
        }
        if (filmDirection === desc && array[j] > array[min]) {
          min = j;
        }
      }
      const t = array[min];
      // eslint-disable-next-line no-param-reassign
      array[min] = array[i];
      // eslint-disable-next-line no-param-reassign
      array[i] = t;
    }
    setFilmDirection(filmDirection === asc ? desc : asc);
    return array;
  };

  // eslint-disable-next-line no-shadow
  const sortByClick = (sortFilm = false) => {
    if (sortFilm) {
      setData(data.sort(sortByFilm));
    }
    setData(data.sort(sortByYear));
  };

  const [filmInputYear, setFilmInputYear] = useState('');
  const [filmInputText, setFilmInputText] = useState('');
  
  const addByClick = () => {
    if (filmInputYear.length !== 4 || filmInputText.length < 5) {
      return false;
    }
    const newRow = { id: data.length + 1, year: filmInputYear, film: filmInputText };
    setData([...data, newRow]);
    setFilmInputYear('');
    setFilmInputText('');
    return data;
  };

  // const handleInputChange = (e, field) => {
  //   if (field === 'filmInputYear') {
  //     setFilmInputYear(e.target.value);
  //   } else if (field === 'filmInputText') {
  //     setFilmInputText(e.target.value);
  //   }
  // };

  const removeById = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const removeLastInArray = () => {
    setData(data.slice(0, -1));
  };

  return (
    <div>
      <Table className="myTable">
        <thead>
          <tr>
            <th>
              <Button color="secondary" onClick={() => sortByClick()}>
                Years
              </Button>
            </th>
            <th>
              <Button color="secondary" onClick={() => sortByClick(true)}>
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
              <td onClick={() => removeById(item.id)}>-</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <input
        type="text"
        placeholder="Year"
        value={filmInputYear}
        onChange={(e) => setFilmInputYear(e.target.value)}
      />
      <input
        type="text"
        placeholder="Film"
        value={filmInputText}
        onChange={(e) => setFilmInputText(e.target.value)}
      />
      <Button color="primary" onClick={addByClick}>
        Add
      </Button>
      <Button color="primary" onClick={removeLastInArray}>
        Delete
      </Button>
    </div>
  );
};

export default LessonFourHooks;
