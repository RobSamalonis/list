import {
  INITIALIZE,
  INITIALIZE_SUCCESS,
  INITIALIZE_ERROR
} from "../actions/types";

const initialState = { isFetching: false };

export default function articles(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE: {
      return Object.assign({}, state, {
        isFetching: true
      });
    }
    case INITIALIZE_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        init: action.payload
      });
    }
    case INITIALIZE_ERROR: {
      return Object.assign({}, state, {
        isFetching: false
      });
    }
    default:
      return state;
  }
}
