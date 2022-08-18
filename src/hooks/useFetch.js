import {useEffect, useReducer} from "react";
import useDebounce from "./useDebounce";
import {fetchReducer, initialState} from "../reducers/fetchReducer";
import {fetchActions} from "../actions/fetchActions";


function useFetch(uri) {
	const [state, dispatch] = useReducer(fetchReducer, initialState);
	const valueDebounce = useDebounce(uri, 1000);

	useEffect(() => {
		dispatch({type: fetchActions.FETCH_START});
		fetch(valueDebounce)
			.then(res => res.json())
			.then(data => dispatch({type: fetchActions.FETCH_SUCCESS, payload: data}))
			.catch(error => dispatch({type: fetchActions.FETCH_ERROR, error: error.toString()}));
		console.log(state)
	}, [valueDebounce]);


	return {...state};
}


export default useFetch;