import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Sum extends Component {
    render(){
        return (
            this.props.isVisible ? <h1>{this.props.a}+{this.props.b}={this.props.a+this.props.b}</h1> : <h1>isVisible is false</h1>
        );
    }
}
/*
const Sum = (props) => 
<h1>{props.a}+{props.b}={props.a+props.b}</h1>;
*/
Sum.propTypes = {
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
    isVisible: PropTypes.bool.isRequired
};

export default Sum;