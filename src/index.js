import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import {shuffle,sample} from 'underscore';

const authors = [
     {
          name:'Mark Twain',
          imageUrl:'images/authors/marktwain.jpg',
          imageSource: 'wikimedia Commons',
          books: ['The Adventurs of Huckleberry Finn',
                    'Life on the Mississippi',
                    'Roughing It']
     }, 
     {
          name:'J.K Rowling',
          imageUrl:'images/authors/jkrowling.jpeg',
          imageSource: 'wikimedia Commons',
          imageAttribution:'Daniel Ogren',
          books: ['Harry potter and the Sorcerers Stone']
     },
     {
          name:'Stephen King',
          imageUrl:'images/authors/stephenking.jpeg',
          imageSource:'Wikepedia Commons',
          imageAttribution:'Pingguino',
          books:['The Shining','IT']
     },
     {
          name:'Charles Dickens',
          imageUrl:'images/authors/charlesdickens.jpg',
          imageSource:'Wikipedia Commons',
          books:['David Copperfield','A Tale of Two Cities']
     },
     {
          name:'Willams Shakespeare',
          imageUrl:'images/authors/williamshakespeare.jpg',
          imageSource:'Wikipedia Commons',
          books:['Hemlet','Macbeth','Romeo and Juliet']
     }
];

function getTurnData(authors) {
    const allBooks = authors.reduce(function(p,c,i){
         return p.concat(c.books);
    },[]);
    const fourRandomBooks = shuffle(allBooks).slice(0,4);
    const answer = sample(fourRandomBooks);
    return {
         books: fourRandomBooks,
         author: authors.find((author) =>
                               author.books.some((title)=>
                               title===answer))
    }
}

const state = {
     turnData: getTurnData(authors),
     highlight: 'wrong'
     /*
     turnData:{
          author: authors[0],
          books: authors[0].books
     }
     */
 
}

ReactDOM.render(<AuthorQuiz {...state}/>,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
