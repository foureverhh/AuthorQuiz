import React,{Component} from 'react';
import Sum from './Sum';

const green = '#39D1B4';
const yellow = '#FFD712';
class ConditionalDisplay extends Component {

    constructor(props){
        super(props);
        this.state={ showSum: true, color: green };
        this.handleClick = this.handleClick.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }

    handleClick(){
        this.setState(state => 
            ({showSum:!state.showSum })
            );
    }

    changeColor(){
        setInterval(() => {
            const newColor = this.state.color === green ? yellow : green;
            this.setState ({color: newColor});
        },3000);
    }

    render () {
        return(
            <div style={{background: this.state.color}}>
                <button onClick={this.handleClick}>{this.state.showSum ? 'ON' : 'OFF'}</button>
                <p>Show sum value now is {this.state.showSum.toString()}</p>
                <Sum isVisible={this.state.showSum} a={10} b={10}/>
                <button onClick={this.changeColor}>Change color</button>
                <p>{this.state.showSum}</p>
            </div>
        );
    }

}

export default ConditionalDisplay;