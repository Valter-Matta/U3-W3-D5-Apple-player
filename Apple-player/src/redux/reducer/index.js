export const initialState = {
	main: {
		songs: [],
	},
	search: {
		input: "",
	},
};

const GET_SONG = "GET_SONG";
const SET_INPUT = "SET_INPUT";

const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_SONG:
			return {
				...state,
				main: {
					...state.main,
					songs: action.payload,
				},
			};
		case SET_INPUT:
			return {
				...state,
				search: {
					...state.search,
					input: state.action.payload || "",
				},
			};
		default:
			return state;
	}
};

export default mainReducer;
