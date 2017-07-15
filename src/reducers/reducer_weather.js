import { FETCH_WEATHER} from '../actions/index'
export default function(state=[], action){
	switch(action.type){
		case FETCH_WEATHER:
			//Insert new data to the front of the array
			return [action.payload.data, ...state];
	}
	return state;
}