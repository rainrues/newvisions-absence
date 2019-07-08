import students from './students.json';
import React from 'react';

const List = (props) => {

  const percentage = 65;
  let belowThreshold = [];
  let formattedList = [];

  students.forEach( (ele) => {
    if (ele.attendancePercentage < percentage) {
      belowThreshold.push(ele);
    }
  });

  belowThreshold.forEach( (ele) => {
    let firstName = ele.firstName;
    let lastName = ele.lastName;
    // let newElement = `<li> ${firstName} ${lastName} </li>`
    let newElement = `${firstName} ${lastName}`;
    formattedList.push(newElement);
  });

  return(
    formattedList
  );
};

export default List;