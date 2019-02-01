import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
//import Enzyme,{ shallow } from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';

describe('Author Quiz',()=>{
  it('render without crashing',()=>{
      const div = document.createElement('div');
      ReactDOM.render(<AuthorQuiz />,div);
  });
});