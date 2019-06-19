import {
  FETCH_CHARS_START,
  FETCH_CHARS_SUCCESS,
  FETCH_CHARS_FAILURE
} from "../actions";

const initialState = {
  characters: [],
  loading: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHARS_START:
      console.log("in start");
      break;

    case FETCH_CHARS_SUCCESS:
      console.log("in success");
      break;

    case FETCH_CHARS_FAILURE:
      console.log("in failure");
      break;

    default:
      return state;
  }
};
