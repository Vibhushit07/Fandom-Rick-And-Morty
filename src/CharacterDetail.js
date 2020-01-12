import React, { Component } from 'react';

class EpisodeDetail extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            episode: [],
            recieved: false,
            character: [],
            pic: null
        };
        this.fetchFirst = this.fetchFirst.bind(this);
        this.fetchEpisode = this.fetchEpisode.bind(this);
    }

    async fetchFirst(){
        console.log(this.props.name);
        const response = await fetch("https://rickandmortyapi.com/api/character/?name="+this.props.name);
        const data = await response.json();
        console.log(data);
        
        this.setState({character: data, recieved: true, pic: data.results[0].image});
        console.log(this.state.pic);
        if(this.state.recieved){
            var c = this.state.character.results[0].episode;
            await c.map(this.fetchEpisode);
            console.log(this.state.episode);
            console.log("length " + this.state.episode.length);   
        }
    }

    async fetchEpisode(url){
        const epi = await fetch(url);
        const d = await epi.json();
        //console.log(d.name);
        this.setState({episode: this.state.episode.concat(d.name)});
    }

    componentDidMount(){
        this.fetchFirst();
    }

    render(){
        return(
            <div>
                
            {
                this.state.recieved ? 
                <div className="about">
                   <h1>Character - {this.props.name} </h1>
                   <hr />
                   <div className="character-detail">
                       <div>
                            <img style={{width: 200, height: 200, margin: 10}} src={this.state.pic}/>
                        </div>
                        <div>
                            <p>  <strong>Species : </strong>   {this.state.character.results[0].species} </p>
                            <p>  <strong>Status : </strong>   {this.state.character.results[0].status} </p>
                            <p>  <strong>Gender : </strong>   {this.state.character.results[0].gender} </p>
                            <p>  <strong>Origin : </strong>   {this.state.character.results[0].origin.name} </p>
                            <p>  <strong>Last Location : </strong>   {this.state.character.results[0].location.name} </p>
                        </div>
                    </div>
                    <p>  <strong>Episodes : </strong>  </p>
                    <ol>
                        {
                            this.state.episode.map(episodes => <li>{episodes}</li>)
                        }
                    </ol>
                </div> :
                <h1 className="about">  Loading </h1>
            }
            </div>
        );
    }
}

export default EpisodeDetail;