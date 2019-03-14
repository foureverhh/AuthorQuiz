import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
//import Counter from './ClickCounter';
//import Sum from './Sum';
//import ConditionalDisplay from './ConditionalDisplay';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

function Hero () {
  return (
  <div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1>Author Quiz</h1>
      <p>Select the book written by the author shown</p>
    </div>
  </div>);
}

function Book ({title, onClick}){
  return(
    <div className="answer" onClick={()=>{onClick(title);}}>
      <h4>{title}</h4>
    </div>
  );
}

function Turn ({author, books, highlight, onAnswerSelected}) {
  function changeBackgrundColor(highlight) {
    const mapping = {
      'none':' ',
      'correct':'green',
      'wrong':'red'
    }
    console.log(mapping[highlight]);
    return mapping[highlight];
  }
  
  return (
    <div className="row turn" style={{backgroundColor:changeBackgrundColor(highlight)}} >
      <div className="col-4 offset-1"> 
        <img src={author.imageUrl} className="authorimage" alt="Author" />
      </div>
      <div className="col-6">
       {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected}/>)}
      </div>
    </div>
  );  
}

Turn.propTypes = {
  anthor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired
};

function Continue ({show, onContinue}) {
  return (
    <div className="row continue">
      { show
        ? <div className="col-11">
          <button className="btn btn-primary btn-lg float-right" onClick={onContinue}>Continue</button>
        </div>
        : null
      }
    </div>
  );
}

function Footer() {
  return (
    <div className="row" id="footer">
      <div className="col-12">
        <p className="text-muted credit">
          All images are from <a href="https://commons.wikimedia.org/wiki/Main_Page">
            wikimedia commons</a> and are in the public domain
        </p>
      </div>
    </div>
  );
}

function mapStateToProps(state){
  return {
    turnData: state.turnData,
    highlight: state.highlight
  };
}

function mapDispatchToProps(dispatch){
  return {
    onAnswerSelected: (answer) => {
      dispatch({type: 'ANSWER_SELECETED',answer});
    },
    onContinue: () => {
      dispatch({type: 'CONTINUE'});
    }
  }
}

const AuthorQuiz = connect(mapStateToProps, mapDispatchToProps)(
  function ({turnData, highlight, onAnswerSelected, onContinue}) {
    return (
      <div>
        <div className="container-fluid">
          <Hero />
          <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
          <Continue show={highlight==="correct"} onContinue={onContinue}/>
          <p><Link to="/add" >Add an anthor</Link></p>
          <Footer />
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
)

export default AuthorQuiz;