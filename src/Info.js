import React, { Component } from 'react';
import EmailIcon from './emailIcon';
import WaIcon from './whatsApp';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddForm: true,
      infoBits: {
        name: '',
        email: '',
        cellNo: ''
      },
      info: []
    };
  }
  handleAdd = () => {
    this.setState({ showAddForm: true });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      info: this.state.info.concat(this.state.infoBits),
      infoBits: {
        name: '',
        email: '',
        cellNo: ''
      },
      showAddForm: false
    });
  };
  handleChangeName = (e) => {
    this.setState({
      infoBits: {
        name: e.target.value,
        email: this.state.infoBits.email,
        cellNo: this.state.infoBits.cellNo
      }
    });
  };
  handleChangeEmail = (e) => {
    this.setState({
      infoBits: {
        name: this.state.infoBits.name,
        email: e.target.value,
        cellNo: this.state.infoBits.cellNo
      }
    });
  };
  handleChangeCellNo = (e) => {
    this.setState({
      infoBits: {
        name: this.state.infoBits.name,
        email: this.state.infoBits.email,
        cellNo: e.target.value
      }
    });
  };

  render() {
    const { showAddForm, infoBits, info } = this.state;
    return (
      <div className="info">
        <div>
          <ul className="infolist">
            {info.map((itemss, index) => (
              <li key={index}>
                <div className="infoname">{itemss.name}</div>
                <div className="infoemail">
                  <EmailIcon />
                  {itemss.email}
                </div>
                <div className="infono">
                  <WaIcon />
                  {itemss.cellNo}
                </div>
              </li>
            ))}
          </ul>
        </div>
        {showAddForm && (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={infoBits.name}
              onChange={this.handleChangeName}
              placeholder="Name"
            />
            <input
              type="email"
              value={infoBits.email}
              onChange={this.handleChangeEmail}
              placeholder="Email"
            />
            <input
              type="number"
              value={infoBits.cellNo}
              onChange={this.handleChangeCellNo}
              placeholder="Cell Number"
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default Info;
