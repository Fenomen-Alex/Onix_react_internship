import React from 'react';

import { Button } from 'reactstrap';

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

class Table extends React.Component{
 data = starWarsOriginal.concat(starWarsPrequel, starWarsSequel);
 render(){
   return(
       <div>
        <table className = "myTable">
            <tbody>
            {
                    this.data.map((numList,i) =>(
                    <tr key={i}>
                        {
                        numList.map((num,j)=>
                            <td key={j}>{num}</td>
                        )
                        }
                    </tr>
                    ))
            }
            </tbody>
        </table>
            <Button color="primary" >Add</Button>
            <Button color="primary" >Delete</Button>
       </div>
   );
 };
};

let starWarsAll = starWarsOriginal.concat(starWarsSequel, starWarsPrequel);
let starWarsRev = starWarsAll.reverse();



const LessonThree = () => {
        console.log(starWarsAll.sort());
        console.log(starWarsRev.sort((a, b) => a - b
        ));
    return(
    <div className="lessonThree">
        <h1>Lesson 3</h1>
        <Table />

    </div>
    );
};

export default LessonThree;