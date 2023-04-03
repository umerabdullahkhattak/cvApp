import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: '',
      college: '',
      uni: '',
      showschooladdbutton: true,
      showcollegeaddbutton: true,
      showuniaddbutton: true,
      showschoolInput: false,
      showcollegeInput: false,
      showuniInput: false,
      schoolInputValue: '',
      collegeInputValue: '',
      uniInputValue: ''
    };
  }
  // handleAddBtn = (field) => {};
  handleInputChange = (e, field) => {
    this.setState({ [`${field}InputValue`]: e.target.value });
  };

  handleAddClick = (field) => {
    this.setState({ [`show${field}Input`]: true });
  };

  handleDoneClick = (field) => {
    const { [`${field}InputValue`]: inputValue } = this.state;
    this.setState({
      [`show${field}Input`]: false,
      [field]: inputValue,
      [`${field}InputValue`]: '',
      [`show${field}addbutton`]: false
    });
  };

  render() {
    const {
      showschooladdbutton,
      showcollegeaddbutton,
      showuniaddbutton,
      school,
      college,
      uni,
      showschoolInput,
      showcollegeInput,
      showuniInput,
      schoolInputValue,
      collegeInputValue,
      uniInputValue
    } = this.state;
    return (
      <div className="education">
        <h1>Education:</h1>
        <div>
          <h3>School:</h3>
          <p className="schoolname">{school}</p>
          {showschooladdbutton ? (
            <>
              {showschoolInput ? (
                <>
                  <input
                    type="text"
                    value={schoolInputValue}
                    onChange={(e) => this.handleInputChange(e, 'school')}
                  />
                  <button onClick={() => this.handleDoneClick('school')}>Done</button>
                </>
              ) : (
                <button onClick={() => this.handleAddClick('school')}>Add</button>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          <h3>College:</h3>
          <p className="collegename">{college}</p>
          {showcollegeaddbutton ? (
            <>
              {showcollegeInput ? (
                <>
                  <input
                    type="text"
                    value={collegeInputValue}
                    onChange={(e) => this.handleInputChange(e, 'college')}
                  />
                  <button onClick={() => this.handleDoneClick('college')}>Done</button>
                </>
              ) : (
                <button onClick={() => this.handleAddClick('college')}>Add</button>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          <h3>University:</h3>
          <p className="uniname">{uni}</p>
          {showuniaddbutton ? (
            <>
              {' '}
              {showuniInput ? (
                <>
                  <input
                    type="text"
                    value={uniInputValue}
                    onChange={(e) => this.handleInputChange(e, 'uni')}
                  />
                  <button onClick={() => this.handleDoneClick('uni')}>Done</button>
                </>
              ) : (
                <button onClick={() => this.handleAddClick('uni')}>Add</button>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

export default Education;
