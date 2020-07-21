import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import user_background from './userscreen_background.jpeg'
import './userscreen.css'
import StarRatingComponent from 'react-star-rating-component'
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setRestaurant } from '../actions/restaurant';
import { Link, Redirect } from 'react-router-dom';

// let auth1 = {}

class Userscreen extends Component {
 	constructor(props){
 		super(props);

 		this.state={
 			r1:'',
 			r2:'',
 			r3:'',
			r4:'',
			r5:'',
			r6:'',
            r7:'',
            r8:''

 		};
        this.handleClick1 = this.handleClick1.bind(this);
 	}
    
	componentDidMount(){
		fetch('api/rest-ratings', {
	      method: 'POST'
	    })
	    .then(res => res.json())
	    .then(body =>{
	    	this.setState({r1: body.Z})
	    	this.setState({r2: body.C})
	    	this.setState({r3: body.J})
			this.setState({r4: body.F})
			this.setState({r5: body.D})
			this.setState({r6: body.P})
	    })
	}

    handleClick1(event){
        event.preventDefault()
        return(
        <Redirect to={{ pathname: '/menu', state: { id: '123' }}}/>
        )
    }

    render() {
        return (
        <div>
            
            <div>
                <MetaTags>
                    <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="theme-color" content="#B02737"/>
                </MetaTags>
        		<img src={user_background} alt="" style= {{width: "100%", height: "auto", margin:"0auto"}}/>
                
                <Link to ={{ pathname: '/menu', state: { id: 'ChopChop' }}}>
                    <div id="btn1">
                	    <h4> Chop Chop </h4>
                		<div>
                		<StarRatingComponent name="ChopChop" editing={false} starCount={5} value={parseInt(this.state.r2, 10)}/>
                		</div>
                	</div>
                </Link>
                
                <Link to ={{ pathname: '/menu', state: { id: 'Jammin Java' }}}>
                    <div id="btn2">
                		<h4> Jammin Java </h4>
                		<div>
                		<StarRatingComponent name="JamminJava" editing={false} starCount={5} value={parseInt(this.state.r3, 10)}/>
                		</div>
                	</div>
            	</Link>

                <Link to ={{ pathname: '/menu', state: { id: 'Flavours' }}}>
                    <div id="btn3">
                		<h4> Flavours </h4> 
                		<div>
                		<StarRatingComponent name="Flavours" editing={false} starCount={5} value={parseInt(this.state.r4, 10)}/>
                		</div>
                	</div>
                </Link>


                <Link to ={{ pathname: '/menu', state: { id: 'Zakir Tikka' }}}>
                	<div id="btn4">
                		<h4> Zakir Tikka </h4> 
                		<div>
                		<StarRatingComponent name="Zakir" editing={false} starCount={5} value={parseInt(this.state.r1, 10)}/>
                		</div>
                	</div>
                </Link>

				<Link to ={{ pathname: '/menu', state: { id: 'Fine Food' }}}>
                	<div id="btn5">
                		<h4> Fine Food </h4> 
                		<div>
                		<StarRatingComponent name="Fine Food" editing={false} starCount={5} value={parseInt(this.state.r5, 10)}/>
                		</div>
                	</div>
                </Link>

				<Link to ={{ pathname: '/menu', state: { id: 'Pines' }}}>
                	<div id="btn6">
                		<h4> Pines </h4> 
                		<div>
                		<StarRatingComponent name="Pines" editing={false} starCount={5} value={parseInt(this.state.r6, 10)}/>
                		</div>
                	</div>
                </Link>

                <Link to ={{ pathname: '/menu', state: { id: 'The Frontier' }}}>
                    <div id="btn7">
                        <h4> The Frontier </h4> 
                        <div>
                        <StarRatingComponent name="The Frontier" editing={false} starCount={5} value={parseInt(this.state.r7, 10)}/>
                        </div>
                    </div>
                </Link>

                <Link to ={{ pathname: '/menu', state: { id: 'The Deck' }}}>
                    <div id="btn8">
                        <h4> The Deck </h4> 
                        <div>
                        <StarRatingComponent name="The Deck" editing={false} starCount={5} value={parseInt(this.state.r8, 10)}/>
                        </div>
                    </div>
                </Link>
				
            </div>

        </div>
        );
    }
}

const mapStateToProps = (state) => ({
    rest: state.rest,
    auth: state.auth
})

export  default connect(mapStateToProps, { setRestaurant })(Userscreen)
