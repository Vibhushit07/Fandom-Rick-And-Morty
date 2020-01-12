import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import './type.css';
import {Link} from 'react-router-dom';

class common extends Component{
	
    render(){
        return(
            <div>
                <div className="navbar">
				<Link to="/"> <img src={logo} className="image" /> </Link>
				    <div className="search">
					    <form>
						    <span className="text">Search By</span>
    						<input type="text" className="input" id="value" placeholder="Episode or Character or Location" ></input>
							<button className="button" >Search</button> 
		    			</form>
			    	</div>
        	    </div>
	    	    <div className="body">
		    		<div className="List">
			    		<ul>
				    		<li>
					    	    <Link to="/location">Locations</Link>
						    </li>
    						<li>
	    					    <Link to="/character">Characters</Link>
		    				</li>
			    			<li>
				    		    <Link to="/episode">Episode</Link>
					    	</li>
				    	</ul>
				    </div>
                </div>
            </div>
        )
    }
}

export default common;