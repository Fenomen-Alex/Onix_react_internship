/* eslint-disable no-param-reassign */
import React, { useState } from 'react';

import { Button, Table } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { starWarsData } from '../constants/constants';

const asc = 'asc';
const desc = 'desc';

const LessonFourHooks = () => {
  const { t } = useTranslation('translations');

  const [data, setData] = useState([...starWarsData]);
  
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
      const s = array[min];
      array[min] = array[i];
      array[i] = s;
    }
    setFilmDirection(filmDirection === asc ? desc : asc);
    return array;
  };

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
                {t('lessonThree.btnYears')}
              </Button>
            </th>
            <th>
              <Button color="secondary" onClick={() => sortByClick(true)}>
                {t('lessonThree.btnFilms')}
              </Button>
            </th>
            <th>{t('lessonThree.btnAdd')}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.year}</td>
              <td>{item.film}</td>
              <Button color="secondary" onClick={() => removeById(item.id)}>-</Button>
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
        {t('lessonThree.btnAdd')}
      </Button>
      <Button color="primary" onClick={removeLastInArray}>
        {t('lessonThree.btnDelete')}
      </Button>
    </div>
  );
};

export default LessonFourHooks;
