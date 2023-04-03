import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDonebutton: true,
      showaddbutton: true,
      completeStatus: false,
      experience: '',
      experiences: []
    };
  }
  handleAddbutton = () => {
    this.setState({
      showaddbutton: false
    });
  };
  handleInputChange = (e) => {
    this.setState({
      experience: e.target.value
    });
  };
  handleDoneClick = () => {
    this.setState({
      experiences: this.state.experiences.concat(this.state.experience),
      experience: '',
      showaddbutton: true
    });
  };
  handlecomplete = () => {
    this.setState({
      completeStatus: true
    });
  };

  render() {
    const { showDonebutton, showaddbutton, experience, experiences, completeStatus } = this.state;
    return (
      <div className="experience">
        <h1>Experience</h1>
        <ul className="experiencelist">
          {experiences.map((itemss, index) => (
            <li key={index}>
              <div> {itemss}</div>
            </li>
          ))}
        </ul>
        {completeStatus ? (
          <></>
        ) : (
          <>
            {showDonebutton ? (
              <>
                {showaddbutton ? (
                  <>
                    <button onClick={this.handleAddbutton}>Add</button>
                    <button onClick={this.handlecomplete}>Complete</button>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      value={experience}
                      onChange={(e) => this.handleInputChange(e)}
                    />
                    <button onClick={() => this.handleDoneClick()}>Done</button>
                  </>
                )}
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    );
  }
}
export default Experience;
