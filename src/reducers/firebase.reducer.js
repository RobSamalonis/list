import {
  INITIALIZE,
  INITIALIZE_SUCCESS,
  INITIALIZE_ERROR,
  REQUEST_FIREBASE,
  RECIEVED_FIREBASE,
  RECIEVED_FIREBASE_ERROR,
  CLEAR_FIREBASE,
  REQUEST_CREATE_ACCOUNT,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
  REQUEST_SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  REQUEST_SIGN_OUT,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE
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
        db: action.payload
      });
    }
    case INITIALIZE_ERROR: {
      return Object.assign({}, state, {
        isFetching: false
      });
    }
    case REQUEST_FIREBASE: {
      return Object.assign({}, state, {
        isFetching: true
      });
    }
    case RECIEVED_FIREBASE: {
      return Object.assign({}, state, {
        isFetching: false,
        db: action.payload
      });
    }
    case RECIEVED_FIREBASE_ERROR: {
      return Object.assign({}, state, {
        isFetching: false
      });
    }
    case CLEAR_FIREBASE: {
      return Object.assign({}, state, {
        isFetching: false,
        db: null
      });
    }
    case REQUEST_CREATE_ACCOUNT: {
      return Object.assign({}, state, {
        isFetching: true
      });
    }
    case CREATE_ACCOUNT_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false
      });
    }
    case CREATE_ACCOUNT_FAILURE: {
      return Object.assign({}, state, {
        isFetching: false
      });
    }
    case REQUEST_SIGN_OUT: {
      return Object.assign({}, state, {
        isFetching: true
      });
    }
    case SIGN_OUT_SUCCESS: {
      return Object.assign({}, state, {
        user: null,
        isFetching: false
      });
    }
    case SIGN_OUT_FAILURE: {
      return Object.assign({}, state, {
        isFetching: false
      });
    }
    case REQUEST_SIGN_IN: {
      return Object.assign({}, state, {
        isFetching: true
      });
    }
    case SIGN_IN_SUCCESS: {
      return Object.assign({}, state, {
        user: action.payload.user,
        isFetching: false
      });
    }
    case SIGN_OUT_FAILURE: {
      return Object.assign({}, state, {
        isFetching: false
      });
    }
    default:
      return state;
  }
}
