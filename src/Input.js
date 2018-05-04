// Input.js

import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Input extends Component {
  static propTypes = {
    classPrefix: PropTypes.string,
    addTodoItem: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.state = {
      inputValue: '',
    };
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleKeyDown(e) {
    if (e.keyCode == '13') {
      let value = e.target.value;
      
      if (!value) return false;

      let newTodoItem = {
        text: value,
        isDone: false,
      };

      this.setState({
        inputValue: '',
      });
      this.props.addTodoItem(newTodoItem);
    }
  }

  render() {
    const { inputValue } = this.state;
    const placeholder = "What to do..."
    return(
      <div>
        <input type="text" value={inputValue} onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} placeholder={placeholder} />
      </div>
    );
  }
}

export default Input;