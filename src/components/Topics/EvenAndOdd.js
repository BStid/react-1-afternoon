import React, { Component } from 'react'

class EvenAndOdd extends Component{
    constructor(props) {
        super(props);
        this.state= {
            evenArray: [],
            oddArray: [],
            userInput: '',
        }
    }

    handleChange(val){
        this.setState({ userInput: val });
    }
    
    assignEvenAndOdds(userInput){
    let arr = userInput.split(',');
    let evens = [];
    let odds = [];

    for ( var i = 0; i < arr.length; i++ ) {
      if ( arr[i] % 2 === 0 ) {
        evens.push( parseInt(arr[i], 10) );
      } else {
        odds.push( parseInt(arr[i], 10) );
      }
    }
    
    this.setState({ evenArray: evens, oddArray: odds});
    }
    
    render(){
        console.log(this.state.userInput)
        return (
        <div className="pussleBox evenAnd OddPB">
            <h4> Evens and Odds</h4>
            <input className="inputLine" onChange= {(e) => this.handleChange(e.target.value)}></input>
            <br/>
            <button className="confirmationButton" onClick={ () => {this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
            <br/><br/>
            <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)} </span>
            <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)} </span>
        </div>
        )
    }
}

export default EvenAndOdd;