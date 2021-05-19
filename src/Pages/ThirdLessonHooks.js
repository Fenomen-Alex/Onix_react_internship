/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { Button, Table } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import StyledTheme from '../Components/StyledWrapper';
import {
  starWarsOriginal, starWarsPrequel, starWarsSequel
} from '../constants/constants';

const LessonThreeHooks = () => {
  const { t } = useTranslation('translations');

  const filmData = [...starWarsOriginal, ...starWarsPrequel, ...starWarsSequel];

  const [data] = useState(filmData);
  
  const [sorted, setSorted] = useState(true);

  const onSort = () => {
    setSorted(!sorted);
    if (!sorted) {
      data.sort();
    } else {
      data.reverse();
    }
  };

  const [added, setAdded] = useState(0);

  const addRow = () => {
    const newRow = [0, 'film'];
    data.push(newRow);
    setAdded(added + 1);
  };

  const [removed, setRemoved] = useState(0);

  const removeRow = () => {
    setRemoved(removed + 1);
    data.pop();
  };
  
  return (
    <>
      <p>{t('lessonThree.lessonThreeHooksTitle')}</p>
      <Table className="myTable">
        <thead>
          <tr>
            <th>
              <Button color="secondary" onClick={onSort}>
                {t('lessonThree.btnYears')}
              </Button>
            </th>
            <th>
              <Button color="secondary" onClick={onSort}>
                {t('lessonThree.btnFilms')}
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              { row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <Button color="primary" onClick={addRow}>
        {t('lessonThree.btnAdd')}
      </Button>
      <Button color="primary" onClick={removeRow}>
        {t('lessonThree.btnDelete')}
      </Button>
    </>
  );
};

export default StyledTheme(LessonThreeHooks);
