import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';

class Person extends Component {
  constructor(props){
    super(props);
    this.inputElementRef = React.createRef();
  }
  render() {
    console.log('[Person.js] rendering...');
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          //ref={(inputEl)=> {inputEl.focus()}}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

Person.proTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
export default Person;