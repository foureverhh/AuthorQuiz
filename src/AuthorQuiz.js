import React, { Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
//import Counter from './ClickCounter';
//import Sum from './Sum';
//import ConditionalDisplay from './ConditionalDisplay';

function Hero () {
  return (
  <div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1>Author Quiz</h1>
      <p>Select the book written by the author shown</p>
    </div>
  </div>);
}

function Turn () {
  return (
    <div className="row">


    </div>
  );
}

function Continue () {
  return (
    <div>
      
    </div>
  );
}
class AuthorQuiz extends Component {

  render() {
    return (
      <div>
        <div className="container-fluid">
          <Hero />
          <Turn />
          <Continue />
        </div>
        {/*
        <h1>Below is for self-study</h1>
        <h1>{this.props.a}+{this.props.b}={this.props.a+this.props.b}</h1>
        <Counter />
        <h1>Here below is ConditionalDisplay</h1>
        <ConditionalDisplay />
        */}
      </div>
    );
  }
}

export default AuthorQuiz;