import React, { Component } from 'react';
import './App.css';
import './type.css';

class Episode extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            episodes: [],
            received: false,
        };
        
        // this.props = this.props.bind(this);
    }

    async fetchFirst(){
        const response = await fetch("https://rickandmortyapi.com/api/episode/");
        const data = await response.json();
        console.log(data);
        this.setState({episodes: data, received: true});
    }

    componentDidMount(){
        this.fetchFirst();
    }

    

    render(){
        return(
            <div> 
                {this.state.received ?
                                        
                        <div className="about">
                            <h1>Episodes</h1>
                            <hr />
                            <div className="rows">
                                <div className="column" onClick={()=>this.props.fun(this.state.episodes.results[0].episode)}>
                                    <div className="head">
                                        <span>{this.state.episodes.results[0].episode}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.episodes.results[0].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.episodes.results[0].characters.length} Characters</span>
                                    </div>
                                </div>

                                <div className="column" onClick={()=>this.props.fun(this.state.episodes.results[1].episode)}>
                                    <div className="head">
                                        <span>{this.state.episodes.results[1].episode}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.episodes.results[1].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.episodes.results[1].characters.length} Characters</span>
                                    </div>
                                </div>

                                <div className="column" onClick={()=>this.props.fun(this.state.episodes.results[2].episode)}>
                                    <div className="head">
                                        <span>{this.state.episodes.results[2].episode}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.episodes.results[2].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.episodes.results[2].characters.length} Characters</span>
                                    </div>
                                </div>

                                <div className="column" onClick={()=>this.props.fun(this.state.episodes.results[3].episode)}>
                                    <div className="head">
                                        <span>{this.state.episodes.results[3].episode}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.episodes.results[3].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.episodes.results[3].characters.length} Characters</span>
                                    </div>
                                </div>

                                <div className="column" onClick={()=>this.props.fun(this.state.episodes.results[4].episode)}>
                                    <div className="head">
                                        <span>{this.state.episodes.results[4].episode}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.episodes.results[4].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.episodes.results[4].characters.length} Characters</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rows">
                                <div className="column" onClick={()=>this.props.fun(this.state.episodes.results[5].episode)}>
                                    <div className="head">
                                        <span>{this.state.episodes.results[5].episode}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.episodes.results[5].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.episodes.results[5].characters.length} Characters</span>
                                    </div>
                                </div>

                                <div className="column" onClick={()=>this.props.fun(this.state.episodes.results[6].episode)}>
                                    <div className="head">
                                        <span>{this.state.episodes.results[6].episode}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.episodes.results[6].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.episodes.results[6].characters.length} Characters</span>
                                    </div>
                                </div>

                                <div className="column" onClick={()=>this.props.fun(this.state.episodes.results[7].episode)}>
                                    <div className="head">
                                        <span>{this.state.episodes.results[7].episode}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.episodes.results[7].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.episodes.results[7].characters.length} Characters</span>
                                    </div>
                                </div>

                                <div className="column" onClick={()=>this.props.fun(this.state.episodes.results[8].episode)}>
                                    <div className="head">
                                        <span>{this.state.episodes.results[8].episode}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.episodes.results[8].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.episodes.results[8].characters.length} Characters</span>
                                    </div>
                                </div>

                                <div className="column" onClick={()=>this.props.fun(this.state.episodes.results[9].episode)}>
                                    <div className="head">
                                        <span>{this.state.episodes.results[9].episode}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.episodes.results[9].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.episodes.results[9].characters.length} Characters</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rows">
                                <div className="column" onClick={()=>this.props.fun(this.state.episodes.results[10].episode)}>
                                    <div className="head">
                                        <span>{this.state.episodes.results[10].episode}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.episodes.results[10].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.episodes.results[10].characters.length} Characters</span>
                                    </div>
                                </div>

                                <div className="column" onClick={()=>this.props.fun(this.state.episodes.results[11].episode)}>
                                    <div className="head">
                                        <span>{this.state.episodes.results[11].episode}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.episodes.results[11].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.episodes.results[11].characters.length} Characters</span>
                                    </div>
                                </div>

                                <div className="column" onClick={()=>this.props.fun(this.state.episodes.results[12].episode)}>
                                    <div className="head">
                                        <span>{this.state.episodes.results[12].episode}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.episodes.results[12].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.episodes.results[12].characters.length} Characters</span>
                                    </div>
                                </div>

                                <div className="column" onClick={()=>this.props.fun(this.state.episodes.results[13].episode)}>
                                    <div className="head">
                                        <span>{this.state.episodes.results[13].episode}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.episodes.results[13].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.episodes.results[13].characters.length} Characters</span>
                                    </div>
                                </div>

                                <div className="column" onClick={()=>this.props.fun(this.state.episodes.results[14].episode)}>
                                    <div className="head">
                                        <span>{this.state.episodes.results[14].episode}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.episodes.results[14].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.episodes.results[14].characters.length} Characters</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rows">
                                <div className="column" onClick={()=>this.props.fun(this.state.episodes.results[15].episode)}>
                                    <div className="head">
                                        <span>{this.state.episodes.results[15].episode}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.episodes.results[15].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.episodes.results[15].characters.length} Characters</span>
                                    </div>
                                </div>

                                <div className="column" onClick={()=>this.props.fun(this.state.episodes.results[16].episode)}>
                                    <div className="head">
                                        <span>{this.state.episodes.results[16].episode}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.episodes.results[16].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.episodes.results[16].characters.length} Characters</span>
                                    </div>
                                </div>

                                <div className="column" onClick={()=>this.props.fun(this.state.episodes.results[17].episode)}>
                                    <div className="head">
                                        <span>{this.state.episodes.results[17].episode}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.episodes.results[17].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.episodes.results[17].characters.length} Characters</span>
                                    </div>
                                </div>

                                <div className="column" onClick={()=>this.props.fun(this.state.episodes.results[18].episode)}>
                                    <div className="head">
                                        <span>{this.state.episodes.results[18].episode}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.episodes.results[18].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.episodes.results[18].characters.length} Characters</span>
                                    </div>
                                </div>

                                <div className="column" onClick={()=>this.props.fun(this.state.episodes.results[19].episode)}>
                                    <div className="head">
                                        <span>{this.state.episodes.results[19].episode}</span>
                                    </div>
                                    <div className="name">
                                        <span>{this.state.episodes.results[19].name}</span>
                                    </div>
                                    <div className="head">
                                        <span>{this.state.episodes.results[19].characters.length} Characters</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    :
                    <h1>Loading</h1>
                }
            </div>
        );
    }
}


export default Episode;