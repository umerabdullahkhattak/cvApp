import React, { Component } from 'react';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tools: "",
      languages: "",
      showlangaddbutton: false,
      showlangdonebutton: true,
      showtoolsaddbutton: false,
      showtoolsdonebutton: true
    }
    
  }
  handleAddClick = (field) => {
    this.setState({ [`show${field}addbutton`]: true });
      
  }
  handleInputChange = (e,field) => {
    {field === "lang" ?(
 
            this.setState({
            languages: e.target.value,
    })

      
    
    ):(
      this.setState({
        tools: e.target.value,
      })
    )}

    }
    
  handleDoneClick = (field) =>{
    this.setState({
      [`show${field}addbutton`]: false,
      [`show${field}donebutton`]: false
    })
  }
  render() {
    const{tools, languages, showlangaddbutton, showlangdonebutton, showtoolsaddbutton, showtoolsdonebutton} = this.state;
    return(
      <div>
        <h1 className='skills'>Information</h1>
        
        <h3>Languages: {languages}</h3>
        
        {showlangdonebutton ? (<>
          {showlangaddbutton ? (
  <>
    <input type="text" value={languages} onChange={(e) => this.handleInputChange(e, 'lang')} />
    <button onClick={() => this.handleDoneClick('lang')}>Done</button>
  </>
) : (
  <>
    <button onClick={() => this.handleAddClick('lang')}>Add</button> 
  </>
)}
        </>):(<></>)}
     

        <h3>Tools: {tools}</h3>
        {showtoolsdonebutton ? (<>
          {showtoolsaddbutton ? (
  <>
    <input type="text" value={tools} onChange={(e) => this.handleInputChange(e, 'tools')} />
    <button onClick={() => this.handleDoneClick('tools')}>Done</button>
  </>
) : (
  <>
    <button onClick={() => this.handleAddClick('tools')}>Add</button> 
  </>
)}
        </>):(<></>)}

      </div>
    )
  }
}

export default Skills;