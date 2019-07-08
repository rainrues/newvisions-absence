import students from './students.json';
import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {threshold: this.props.threshold};
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

    belowThreshold.forEach( (ele) => {
      let newElement = <li>{ele.firstName} {ele.lastName} {ele.studentId}</li>;
      formattedList.push(newElement);
    });

    return formattedList;
  }

  update() {
    return (e) => {
      this.setState({ threshold: e.target.value });
    };
  }

  render() {
    return(
      <div>
        <form>
          <h2 className="heading">Chronically Absent Students</h2>
          <br></br>
          <p>Threshold percentage:</p>
          <label htmlFor="Threshold">
            <input className="input" type="integer" onChange={this.update()} placeholder={this.state.threshold} />
          </label>
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