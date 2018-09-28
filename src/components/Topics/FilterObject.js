import React, { Component } from 'react';

class FilterObject extends Component{
    constructor(){
        super();
        this.state = {
            unFilteredArray : [{cat:"Meow",dog:"Bark",mouse:"squeak"},
            {cat:"Meow",cheese:"Mouse",food:"pizza"},
            {hello:'Hi',name:'Ben',dog:"Bark"}],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(value){
        this.setState({userInput: value});
    }

    assignFilter(){
        let unArr = this.state.unFilteredArray;
        let filArr = this.state.filteredArray;
        let user = this.state.userInput;

        unArr.filter((value) =>{
            for(let props in value){
                if(props===user)
                {
                    filArr.push(value);
                }
                }
            })
        this.setState({filteredArray: filArr});
    }

    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={()=>this.assignFilter()}> Filter</button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
                
            </div>
        )
    }
}

export default FilterObject;