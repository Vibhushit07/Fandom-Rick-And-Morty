import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import './type.css';

class Character extends Component{
    state = {
        characters: null,
        received: false
    };
    constructor(props){
        super(props);
    }

    async fetchFirst(){
        const response = await fetch("https://rickandmortyapi.com/api/character//");
        const data = await response.json();
        console.log(data);
        this.setState({characters: data, received: true});
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
                            <h1>Characters</h1>
                            <hr />
                            <div className="rows">
                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.characters.results[0].species}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.characters.results[0].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.characters.results[0].episode.length} Episodes</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.characters.results[1].species}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.characters.results[1].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.characters.results[1].episode.length} Episodes</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.characters.results[2].species}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.characters.results[2].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.characters.results[2].episode.length} Episodes</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.characters.results[3].species}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.characters.results[3].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.characters.results[3].episode.length} Episodes</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.characters.results[4].species}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.characters.results[4].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.characters.results[4].episode.length} Episodes</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rows">
                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.characters.results[5].species}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.characters.results[5].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.characters.results[5].episode.length} Episodes</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.characters.results[6].species}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.characters.results[6].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.characters.results[6].episode.length} Episodes</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.characters.results[7].species}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.characters.results[7].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.characters.results[7].episode.length} Episodes</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.characters.results[8].species}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.characters.results[8].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.characters.results[8].episode.length} Episodes</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.characters.results[9].species}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.characters.results[9].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.characters.results[9].episode.length} Episodes</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rows">
                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.characters.results[10].species}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.characters.results[10].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.characters.results[10].episode.length} Episodes</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.characters.results[11].species}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.characters.results[11].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.characters.results[11].episode.length} Episodes</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.characters.results[12].species}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.characters.results[12].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.characters.results[12].episode.length} Episodes</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.characters.results[13].species}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.characters.results[13].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.characters.results[13].episode.length} Episodes</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.characters.results[14].species}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.characters.results[14].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.characters.results[14].episode.length} Episodes</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rows">
                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.characters.results[15].species}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.characters.results[15].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.characters.results[15].episode.length} Episodes</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.characters.results[16].species}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.characters.results[16].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.characters.results[16].episode.length} Episodes</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.characters.results[17].species}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.characters.results[17].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.characters.results[17].episode.length} Episodes</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.characters.results[18].species}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.characters.results[18].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.characters.results[18].episode.length} Episodes</span>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="head">
                                        <span>{this.state.characters.results[19].species}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.characters.results[19].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.characters.results[19].episode.length} Episodes</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    :
                    <h1> Loading </h1>
                }
            </div>
        );
    }
}


export default Character;