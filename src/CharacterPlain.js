import React, { Component } from 'react';
import Character from './Character';
import CharacterDetail from './CharacterDetail';

class CharacterPlain extends Component{
    
    state = {
        name: null
    }

    constructor(props){
        super(props);
        this.fun = this.fun.bind(this);
        this.updateName = this.updateName.bind(this);
    }

    updateName(){
        this.state.name = null;
    }

    fun(n){
        this.setState({
            name: n
        });
    }

    render(){
        return(
            <div>
            {this.state.name === null ? <Character fun={this.fun} /> : <div><CharacterDetail name={this.state.name} /> {this.updateName()}</div> }
            </div>
        )
    }
}

export default CharacterPlain;