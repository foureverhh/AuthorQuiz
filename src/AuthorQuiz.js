import React, { Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import Counter from './ClickCounter';
//import Sum from './Sum';
import ConditionalDisplay from './ConditionalDisplay';

class AuthorQuiz extends Component {


  render() {
    return (
      <div>
        <h1>{this.props.a}+{this.props.b}={this.props.a+this.props.b}</h1>
        <Counter />
        <h1>Here below is ConditionalDisplay</h1>
        <ConditionalDisplay />
      </div>
    );
  }
}

export default AuthorQuiz;