import React from 'react';
import "./AddAuthorForm.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { POINT_CONVERSION_COMPRESSED } from 'constants';

class AuthorForm extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            name:"",
            imageUrl:"",
            books:[],
            bookTemp:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddBook = this.handleAddBook.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddAuthor(this.state);
    }

    handleAddBook(e){
        this.setState(
            {
                books:this.state.books.concat([this.state.bookTemp]),
                bookTemp:''
            }
        );
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <div className="AddAuthorForm_input">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
            </div>
            <div className="AddAuthorForm_input">
              <label htmlFor="imageUrl">Image URL</label>
              <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange}/>
            </div>
            <div className="AddAuthorForm_input">
              <label htmlFor="bookTemp">Books</label>
              {this.state.books.map((book,index) => <p key={index}>{book}</p>)}
              <input type="text" name="bookTemp" value={this.state.bookTemp} onChange={this.handleChange} />
              <input type="button" value="+" onClick={this.handleAddBook}/>
            </div>
            <input type="submit" value="Add"/>
            
          </form>
            
        );
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        onAddAuthor : (author) => {
            dispatch({type: 'ADD_AUTHOR', author});
            props.history.push('/');
        }
    }
}

function AddAuthorForm({match, onAddAuthor}) {
    return (
         <div className="AddAuthorForm">
            <h1>Add Author</h1>
            <AuthorForm onAddAuthor={onAddAuthor}/>
         </div>
    );
}

export default withRouter(connect(()=>{}, mapDispatchToProps)(AddAuthorForm));