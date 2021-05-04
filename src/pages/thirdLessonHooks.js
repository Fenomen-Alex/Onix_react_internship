import React, { useState } from 'react';
import { Button, Table } from 'reactstrap';
// eslint-disable-next-line import/no-cycle
import StyledTheme from '../components/StyledWrapper';
import {
  // eslint-disable-next-line import/named
  starWarsOriginal, starWarsPrequel, starWarsSequel
} from '../Constants/Constants';

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
