import React, { Component } from 'react';
import Info from "./Info"
import Education from "./Education"
import Skills from "./Skills"
import Experience from './Experience';
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Info />
      <Education />
      <Skills />
      <Experience />
      </div>
    );
  }
}

export default App;
