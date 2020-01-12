import React, { Component } from 'react';

class EpisodeDetail extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            episode: [],
            recieved: false,
            character: []
        };
        this.fetchFirst = this.fetchFirst.bind(this);
        this.fetchCharacter = this.fetchCharacter.bind(this);
    }

    async fetchFirst(){
        console.log(this.props.number);
        const response = await fetch("https://rickandmortyapi.com/api/episode/?episode="+this.props.number);
        const data = await response.json();
        console.log(data);
        
        this.setState({episode: data, recieved: true});
        if(this.state.recieved){
            var c = this.state.episode.results[0].characters;
            await c.map(this.fetchCharacter);
            console.log(this.state.character);
            console.log("length " + this.state.character.length);   
        }
    }

    async fetchCharacter(url){
        const char = await fetch(url);
        const d = await char.json();
        //console.log(d.name);
        this.setState({character: this.state.character.concat(d.name)});
    }

    componentDidMount(){
        this.fetchFirst();
        
        console.log("Hello " + this.state.character);
    }

    render(){
        return(
            <div>
                
            {
                this.state.recieved ? 
                <div className="about">
                   <h1>Episode - {this.state.episode.results[0].name} </h1>
                   <hr />
                    <p>  <strong>Episode Number : </strong>   {this.props.number} </p>
                    <p> <strong>Air Date : </strong>{this.state.episode.results[0].air_date}</p>
                    <p> <strong>Character : </strong></p>

                    <ol>
                        {
                            this.state.character.map(characters => <li>{characters}</li>)
                        }
                    </ol>
                </div> :
                <div> Loading </div>
            }
            </div>
        );
    }
}

export default EpisodeDetail;