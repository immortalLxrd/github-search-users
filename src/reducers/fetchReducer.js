import {fetchActions} from "../actions/fetchActions";


const initialState = {
	data: {},
	loading: true,
	error: ''
};

const fetchReducer = (state, action) => {
	switch (action.type) {
		case fetchActions.FETCH_START:
			return {
				...initialState
			};
		case fetchActions.FETCH_SUCCESS:
			return {
				...initialState,
				data: action.payload,
				loading: false
			};
		case fetchActions.FETCH_ERROR:
			return {
				...initialState,
				loading: false,
				error: action.error
			};
		default:
			return initialState;
	}
};


export {initialState, fetchReducer};