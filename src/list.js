import students from './students.json';
import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);

    // Changing these things will cause a rerender with updated information.
    // Defaults are passed in from App.js in order to initially populate page
    this.state = {
      threshold: this.props.threshold,
      dataType: this.props.dataType,
      checked: this.props.dataType
    };
  }

  // This function is used to move data from json format into an array and to 
  // include the requested student information.
  formatList() {
    let formattedList = [];

    // This will go through all students. It will first check if students attendence 
    // percentage is below the threshold. If it is the students first name, last name, 
    // and other requested data will be extracted, turned into a list item and added
    // to an array of formatted student list items
    students.forEach( (student) => {
      if (student.attendancePercentage < this.state.threshold) {
        let studentListItem = <li>{student.firstName} {student.lastName} 
                              - {student[this.state.dataType]}</li>;
        formattedList.push(studentListItem);
      }
    });

    return formattedList;
  }

  // This function updates state as the threshold is changed in order to prompt rerender
  update() {
    return (e) => {
      this.setState({ threshold: e.target.value });
    };
  }

  // This function updates state when radio buttons are selected in order to prompt rerender
  handleClick(field) {
    return (e) => {
      this.setState({ dataType: field, checked: field })
    };
  }

  render() {
    return(
      <div>
        <h2 className="heading">Chronically Absent Students</h2>

          <form>
            <br></br>
            <p>Threshold percentage:</p>
            <label htmlFor="Threshold">
              <input className="input" 
                     type="integer" 
                     onChange={this.update()} 
                     placeholder={this.state.threshold} 
              />
            </label>
            <p>Type of Data:</p> 
              <input type="radio" name="data" 
                     value="studentId" 
                     onClick={this.handleClick("studentId")} 
                     // This line is necessary to allow for default selection of this button
                     checked={"studentId" === this.state.checked ? "checked" : ""}
              /> Student Id<br></br>
              <input type="radio" name="data" 
                     value="guidanceCounselorEmail" 
                     onClick={this.handleClick("guidanceCounselorEmail")}
              /> Guidance Counselor Email<br></br>
              <input type="radio" name="data" 
                     value="homePhoneNumber" 
                     onClick={this.handleClick("homePhoneNumber")}
              /> Home Phone Number<br></br>
              <input type="radio" name="data" 
                     value="advisor" 
                     onClick={this.handleClick("advisor")}
              /> Advisor<br></br>
          </form>

        <br></br>

          <h3>Number of students = {this.formatList().length}</h3>
          <ul>
            {this.formatList()}
          </ul>
      </div>
    );
  }
}

export default List;