import React, { Component } from 'react';

class Sum extends Component{
    constructor(){
        super();
        this.state ={
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange(val){
        this.setState({ number1: parseInt(val, 10) })
    }
    handleChange2(val){
        this.setState({ number2: parseInt(val, 10) })
    }
    sumProb(){
        let num1 = this.state.number1;
        let num2 = this.state.number2;

        this.setState({sum: num1 + num2});
    }
    render(){
        return (
        <div className="puzzleBox sumPB">
            <h4>Sum</h4>
            <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}></input>
            <input className="inputLine" onChange= {(e)=>this.handleChange2(e.target.value)}></input>
            <button className="confirmationButton" onClick={()=>this.sumProb()}>Go For it</button>
            <span className="resultsBox">Sum: {this.state.sum}</span>
        </div>
        )
    }
}

export default Sum;