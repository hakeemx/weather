import React, { Component } from 'react';
import {connect} from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'
class WeatherList extends Component {
	renderWeather(cityData){
		const name= cityData.city.name;

        //API provided data in kelvin, convert to fahrenheit
        //Forumula = 1.8 x (K - 273) + 32
		const temps = cityData.list.map(weather => 1.8*((weather.main.temp) - 273) + 32)
		const pressures = cityData.list.map(weather => weather.main.pressure)
		const humidities = cityData.list.map(weather => weather.main.humidity)
        //Get lon & lat from cityData api
        const {lon,lat} = cityData.city.coord;

		return(
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat}/></td>
				<td><Chart data={temps} color="orange" units="°F" /></td>
				<td><Chart data={pressures} color="orange" units="hPa" /></td>
				<td><Chart data={humidities} color="orange" units="%" /></td>
			</tr>
		);
	}
    render() {
        return (
            <table className='table table-hover'>
            	<thead>
            		<tr>
            			<th>City</th>
            			<th>Temperature (°F)</th>
            			<th>Pressure (hPa)</th>
            			<th>Humidity (%)</th>
            		</tr>
            	</thead>
            	<tbody>
            		{this.props.weather.map(this.renderWeather)}
            	</tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}){
	return {weather}//Sets weather:state.weather
}

export default connect(mapStateToProps)(WeatherList);