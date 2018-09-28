import React, { Component } from 'react';

class FilterString extends Component{
    constructor(){
        super();
        this.state ={
            unFilteredArray:['apple','banana','tricycle','rat','english','xyz','zooKeeper','planning'],
            userInput:'',
            filteredArray:[]
        }
    }

    handleChange(val){
        this.setState({userInput: val});
    }
    assignFilter(){
        let stringArr = [];
        let user = this.state.userInput.toLowerCase();
        let stringCut = [];
        this.state.unFilteredArray.map((value) =>
        {
            stringArr = value.split("");
            
            for(let i = 0; i < user.length; i++)
            {
              if(value[i] === user[i])
              {
                stringCut.push(value[i]);
                console.log(value[i])
              }
            }
        })
            stringCut = stringCut.join('');
            console.log(stringCut)
            if(stringCut === user)
            {
                let filArr = [];
                filArr.push(stringCut);
                this.setState({filteredArray: filArr});
                
            }

            

    }

    render(){ 
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">unFilteredArray:{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.assignFilter()}></button>
                <span className="resultsBox filterStringRB">filteredArray: {JSON.stringify(this.state.filteredArray)}</span>

            </div>
        )
    }
}

export default FilterString;