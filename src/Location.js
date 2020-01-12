import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import './type.css';

class Location extends Component{
    state = {
        locations: null,
        received: false
    };
    constructor(props){
        super(props);
    }

    async fetchFirst(){
        const response = await fetch("https://rickandmortyapi.com/api/location/");
        const data = await response.json();
        this.setState({locations:data, received: true});
    }

    componentDidMount(){
        this.fetchFirst();
    }

    render(){
        return(
            <div> 
                {this.state.received ? 
                    <div>
                        <div className="about">
                            <h1>Locations</h1>
                            <hr />
                            <div className="rows">
                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.locations.results[0].type}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.locations.results[0].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.locations.results[0].residents.length} Residents</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.locations.results[1].type}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.locations.results[1].name} </span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.locations.results[1].residents.length} Residents </span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.locations.results[2].type} </span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.locations.results[2].name} </span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.locations.results[2].residents.length} Residents </span>                                        
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.locations.results[3].type}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.locations.results[3].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.locations.results[3].residents.length} Residents</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.locations.results[4].type}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.locations.results[4].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.locations.results[4].residents.length} Residents</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rows">
                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.locations.results[5].type}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.locations.results[5].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.locations.results[5].residents.length} Residents</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.locations.results[6].type}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.locations.results[6].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.locations.results[6].residents.length} Residents</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.locations.results[7].type}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.locations.results[7].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.locations.results[7].residents.length} Residents</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.locations.results[8].type}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.locations.results[8].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.locations.results[8].residents.length} Residents</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.locations.results[9].type}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.locations.results[9].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.locations.results[9].residents.length} Residents</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rows">
                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.locations.results[10].type}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.locations.results[10].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.locations.results[10].residents.length} Residents</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.locations.results[11].type}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.locations.results[11].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.locations.results[11].residents.length} Residents</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.locations.results[12].type}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.locations.results[12].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.locations.results[12].residents.length} Residents</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.locations.results[13].type}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.locations.results[13].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.locations.results[13].residents.length} Residents</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.locations.results[14].type}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.locations.results[14].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.locations.results[14].residents.length} Residents</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rows">
                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.locations.results[15].type}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.locations.results[15].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.locations.results[15].residents.length} Residents</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.locations.results[16].type}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.locations.results[16].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.locations.results[16].residents.length} Residents</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.locations.results[17].type}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.locations.results[17].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.locations.results[17].residents.length} Residents</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.locations.results[18].type}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.locations.results[18].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.locations.results[18].residents.length} Residents</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.locations.results[19].type}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.locations.results[19].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.locations.results[19].residents.length} Residents</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <h1> Loading</h1>
                }
            </div>
        );
    }
}


export default Location;