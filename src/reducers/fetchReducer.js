import {fetchActions} from "../actions/fetchActions";

export const INITIAL_STATE = {
	data: {},
	loading: true,
	error: ''
};

export const fetchReducer = (state, action) => {
	switch (action.type) {
		case fetchActions.FETCH_START:
			return {
				...INITIAL_STATE
			};
		case fetchActions.FETCH_SUCCESS:
			return {
				...INITIAL_STATE,
				data: action.payload,
				loading: false
			};
		case fetchActions.FETCH_ERROR:
			return {
				...INITIAL_STATE,
				error: action.error,
				loading: false
			};
		default:
			return INITIAL_STATE;
	}
};