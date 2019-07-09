import students from './students.json';
import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      threshold: this.props.threshold,
      dataType: this.props.dataType
    };
    this.update = this.update.bind(this);
  }

  formatList() {

    let belowThreshold = [];
    let formattedList = [];
    let threshold = this.state.threshold;

    students.forEach( (ele) => {
      if (ele.attendancePercentage < threshold) {
        belowThreshold.push(ele);
      }
    });

    // QUESTION QUESTION QUESTION QUESTION QUESTION QUESTION
    belowThreshold.forEach( (ele) => {
      const type = this.state.dataType;
      let data = ele[type];
      let newElement = <li>{ele.firstName} {ele.lastName} - {data}</li>;
      formattedList.push(newElement);
    });

    return formattedList;
  }

  update() {
    return (e) => {
      this.setState({ threshold: e.target.value });
    };
  }

  handleClick(field) {
    return (e) => {
      this.setState({ dataType: field })
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
              <input className="input" type="integer" onChange={this.update()} placeholder={this.state.threshold} />
            </label>
            <p>Type of Data:</p>
          <input type="radio" name="data" value="studentId" onClick={this.handleClick("studentId")}/> Student Id<br></br>
          <input type="radio" name="data" value="guidanceCounselorEmail" onClick={this.handleClick("guidanceCounselorEmail")}/> Guidance Counselor Email<br></br>
          <input type="radio" name="data" value="homePhoneNumber" onClick={this.handleClick("homePhoneNumber")}/> Home Phone Number<br></br>
          <input type="radio" name="data" value="advisor" onClick={this.handleClick("advisor")}/> Advisor<br></br>
          </form>
        <br></br>
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