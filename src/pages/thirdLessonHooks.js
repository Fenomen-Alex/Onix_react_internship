import React, { useState } from 'react';
import { Button, Table } from 'reactstrap';
// eslint-disable-next-line import/no-cycle
import StyledTheme from '../components/StyledWrapper';

const starWarsOriginal = [
  [1977, 'Звёздные войны. Эпизод IV: Новая надежда'],
  [1980, 'Звёздные войны. Эпизод V: Империя наносит ответный удар'],
  [1983, 'Звёздные войны. Эпизод VI: Возвращение джедая'],
];
const starWarsPrequel = [
  [1999, 'Звёздные войны. Эпизод I: Скрытая угроза'],
  [2002, 'Звёздные войны. Эпизод II: Атака клонов'],
  [2005, 'Звёздные войны. Эпизод III: Месть ситхов'],
];
const starWarsSequel = [
  [2015, 'Звёздные войны. Эпизод VII: Пробуждение Силы'],
  [2017, 'Звёздные войны. Эпизод VIII: Последние джедаи'],
  [2019, 'Звёздные войны. Эпизод IX: Скайуокер. Восход'],
];

const LessonThreeHooks = () => {
  const filmData = [...starWarsOriginal, ...starWarsPrequel, ...starWarsSequel];

  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(filmData);
  
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
    // eslint-disable-next-line no-console
    console.log(data);
  };

  const [removed, setRemoved] = useState(0);

  const removeRow = () => {
    setRemoved(removed + 1);
    data.pop();
  };
  
  return (
    <>
      <p>Lesson 3 Using Hooks</p>
      <Table className="myTable">
        <thead>
          <tr>
            <th>
              {/* eslint-disable-next-line no-return-assign */}
              <Button color="secondary" onClick={onSort}>
                Years
              </Button>
            </th>
            <th>
              {/* eslint-disable-next-line no-return-assign */}
              <Button color="secondary" onClick={onSort}>
                Films
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={i}>
              { row.map((cell, j) => (
                // eslint-disable-next-line react/no-array-index-key
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <Button color="primary" onClick={addRow}>
        Add
      </Button>
      <Button color="primary" onClick={removeRow}>
        Delete
      </Button>
    </>
  );
};

export default StyledTheme(LessonThreeHooks);
