import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme,{ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthorQuiz />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('When setting up testing', ()=>{
  it("should fail", ()=> {
    expect(1+1).toBe(2);
  })
});

const moment = new Date(1588946400000);

function Hello(props) {
  return <h1>Hello att {props.now}</h1>;
} 

describe("When testing Hello", ()=> {
  //beforeAll is a set up function before all it test case
  let result;
  beforeAll(()=>{
    result = Hello({now: moment.toDateString()});
  });

  it('it case 1 return a value', ()=>{
    expect(result).not.toBeNull();
  });
  it('has children', ()=> {
    expect(result.props.children).toBeTruthy();
  });
 

  it('it is a h1',()=> {
    expect(result.type).toBe('h1');
  });

});

describe('When testing with ReactDOM', () => {
  it('renders without crashing', ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<Hello now={moment.toISOString}/>,div);
  });
});

//enzyme practice
Enzyme.configure({ adapter: new Adapter()});
describe ('When testing with enzyme', ()=> {
  it('renders a h1', ()=> {
      const wrapper = shallow(<Hello now={moment.toISOString}/>);
      expect(wrapper.find('h1').length).toBe(1);
  });
  /*
  it('contains Hello at 2020-05-08T14:00:00.00Z', ()=> {
    const wrapper = shallow(<Hello now={moment.toISOString}/>);
    expect(wrapper.contains(<h1>Hello at 2020-05-08T14:00:00.00Z</h1>)).toBe(true)
  });
  */
});
