import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data){
	return _.round(_.sum(data)/data.length)
}

export default (props) => {
	return (
		<div>
			<Sparklines height={60} width={90} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine typpe="avg"/>
			</Sparklines>
			<div>{average(props.data)} {props.units}</div>
		</div>
	)
}