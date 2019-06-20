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
    case FETCH_CHARS_START:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_CHARS_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.payload.data.results
      };

    case FETCH_CHARS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        characters: []
      };

    default:
      return state;
  }
};
