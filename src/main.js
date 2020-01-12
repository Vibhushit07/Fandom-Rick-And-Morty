import React, { Component } from 'react';
import CharacterPlain from './CharacterPlain';
import Location from './Location';
import HomePage from './HomePage';
import Common from './common';
import {Route, Switch} from 'react-router-dom';
import Episode from './Episode';

class Main extends Component{
   
    render(){
        return(
        <div>
            <Switch>
                <Route exact path='/' render={()=>(<div> <Common/> <HomePage/> </div>)} />    
                <Route exact path='/character' render={()=>( <div> <Common /> <CharacterPlain /> </div>)} />
                <Route exact path='/location' render={()=>(<div> <Common /> <Location/> </div> )} />
                <Route exact path='/episode' render={()=>( <div> <Common /> <Episode /> </div> )} />
            </Switch>
        </div>
        );
        
    }
}

export default Main;











