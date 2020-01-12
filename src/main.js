import React, { Component } from 'react';
import Character from './Character';
import Location from './Location';
import HomePage from './HomePage';
import Common from './common';
import {Route, Switch} from 'react-router-dom';
import EpisodePlain from './EpisodePlain';

class Main extends Component{
   
    render(){
        return(
        <div>
            <Switch>
                <Route exact path='/' render={()=>(<div> <Common/> <HomePage/> </div>)} />    
                <Route exact path='/character' render={()=>( <div> <Common /> <Character/> </div>)} />
                <Route exact path='/location' render={()=>(<div> <Common /> <Location/> </div> )} />
                <Route exact path='/episode' render={()=>( <div> <Common /> <EpisodePlain /> </div> )} />
            </Switch>
        </div>
        );
        
    }
}

export default Main;











