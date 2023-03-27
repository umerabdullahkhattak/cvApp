import React, { Component } from 'react';

class skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      showAddForm: false,
      newItem: ''
    };
  }
  handleAdd = () => {
    this.setState({ showAddForm: true });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.newItem],
      showAddForm: false,
      newItem: ''
    });
  }

  handleChange = (e) => {
    this.setState({ newItem: e.target.value });
  }


  render() {
    const { items, showAddForm, newItem } = this.state;
    return (
        <div >
     <h1 className='skills'>Skills</h1>
     <hr/>
     <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {!showAddForm && (
          <button onClick={this.handleAdd}>Add</button>
        )}
        {showAddForm && (
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={newItem} onChange={this.handleChange} />
            <button type="submit">Submit</button>
          </form>
        )}
     </div>
    );
  }
}

export default skills;