import React, { Component } from 'react';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoBits: {
        name: '', 
        email: '',
        cellNo: ''
      },
      info: [],
    }
  }
  handleAdd = () => {
    this.setState({ showAddForm: true });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      info: this.state.info.concat(this.state.infoBits),
      infoBits: {
        name: '', 
        email: '',
        cellNo: ''
      }
    });
    
  }
  handleChangeName = (e) => {
    this.setState({ 
      infoBits: {
        name: e.target.value,
        email: this.state.infoBits.email,
        cellNo: this.state.infoBits.cellNo,
        
      },
                  
                  });
  } 
  handleChangeEmail = (e) => {
    this.setState({ 
      infoBits: {
        name: this.state.infoBits.name,
        email: e.target.value,
        cellNo: this.state.infoBits.cellNo,
        
      },
                  
                  });
  }   
  handleChangeCellNo = (e) => {
    this.setState({ 
      infoBits: {
        name: this.state.infoBits.name,
        email: this.state.infoBits.email,
        cellNo: e.target.value,
        
      },
      
      });
                  
                  
  } 

  
  render() {
    const { items, showAddForm, newItem,email,name,cellNo,infoBits,info } = this.state;
    return (
      
        <div >
     <h1 className='info'>Information</h1>

     <hr/>
     <ul className='infoList'>
     {info.map((itemss, index) => (
  <li key={index}>
    <div> <h3>{itemss.name}</h3> <h4>{itemss.email}</h4><h4>{itemss.cellNo}</h4></div>
    
  </li>
))}
        </ul>
     
     <form onSubmit={this.handleSubmit} >
        <input type="text"  value={infoBits.name}  onChange={this.handleChangeName} placeholder='Name' />
        <input type="email" value={infoBits.email} onChange={this.handleChangeEmail} placeholder='Email' />
        <input type="number" value={infoBits.cellNo} onChange={this.handleChangeCellNo} placeholder='Cell Number' />
        <button type="submit">Submit</button>
     </form>
     
     </div>
    );
  }
}

export default Info;