import {useEffect, useReducer} from "react";
import useDebounce from "./useDebounce";
import {fetchReducer, INITIAL_STATE} from "../reducers/fetchReducer";
import {fetchActions} from "../actions/fetchActions";

export default function useFetch(uri) {
	const [state, dispatch] = useReducer(fetchReducer, INITIAL_STATE);
	const valueDebounce = useDebounce(uri, 1000);

	useEffect(() => {
		dispatch({type: fetchActions.FETCH_START});
		fetch(uri)
			.then(res => res.json())
			.then(data => dispatch({type: fetchActions.FETCH_SUCCESS, payload: data}))
			.catch(error => dispatch({type: fetchActions.FETCH_SUCCESS, payload: error}));
	}, [valueDebounce]);


	return {...state};
}
