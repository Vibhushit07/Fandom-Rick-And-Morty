import React, { Component } from 'react';
import Episode from './Episode';
import EDetail from './EpisodeDetail';
class EpisodePlain extends Component{
    
    state = {
        number: null
    }

    constructor(props){
        super(props);
        this.fun = this.fun.bind(this);
        this.updateNumber = this.updateNumber.bind(this);
    }

    updateNumber(){
        this.state.number= null;
    }

    fun(n){
        this.setState({
            number: n
        });
    }

    render(){
        return(
            <div>
            {this.state.number === null ? <Episode fun={this.fun} /> : <div><EDetail number={this.state.number} /> {this.updateNumber()}</div> }
            </div>
        )
    }
}

export default EpisodePlain;