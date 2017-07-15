import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'

class SearchBar extends Component{
	constructor(props){
		super(props)
		this.state = {
			term:''
		};

		//Bind "this" to onInputChange to have the correct context
		this.onInputChange = this.onInputChange.bind(this);

		//Bind context of "this" to onFormSubmit
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	//Event handler used when user types in searchbar and input changes
	onInputChange(event){

		//
		this.setState({term: event.target.value})
	}

	//Event handler for the form submit
	onFormSubmit(event){
		event.preventDefault();

		//Fetch weather data
		this.props.fetchWeather(this.state.term)

		//Clear search when user submits form or clicks enter
		this.setState({term:''})
	}

	render(){
		return(
			<form onSubmit={this.onFormSubmit}
			className="input-group">
				<input 
					placeholder="Get a five day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">
						Submit
					</button>
				</span>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);