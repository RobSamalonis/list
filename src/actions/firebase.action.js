import firebase from "firebase";
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
  SIGN_IN_FAILURE,
  REQUEST_SIGN_OUT,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  REQUEST_UPDATE_FRIENDS_LIST,
  UPDATE_FRIENDS_LIST_SUCCESS,
  UPDATE_FRIENDS_LIST_ERROR
} from "./types";

var config = {
  apiKey: "AIzaSyDwCfDIkW-GpaUCdqWIfWOb61wkK4LpA6k",
  authDomain: "list-a77e2.firebaseapp.com",
  databaseURL: "https://list-a77e2.firebaseio.com/"
};

const initializeFirebase = () => {
  return dispatch => {
    dispatch({ type: INITIALIZE });
    firebase.initializeApp(config);
    firebase
      .database()
      .ref("/")
      .once("value")
      .then(snapshot => {
        dispatch({ type: INITIALIZE_SUCCESS, payload: snapshot.val() });
      })
      .catch(error => {
        dispatch({ type: INITIALIZE_ERROR });
      });
  };
};

const fetchFirebase = () => {
  return dispatch => {
    dispatch({ type: REQUEST_FIREBASE });
    firebase
      .database()
      .ref("/")
      .once("value")
      .then(snapshot => {
        dispatch({ type: RECIEVED_FIREBASE, payload: snapshot.val() });
      })
      .catch(error => {
        dispatch({ type: RECIEVED_FIREBASE_ERROR });
      });
  };
};

const clearFirebase = () => {
  return dispatch => {
    dispatch({ type: CLEAR_FIREBASE });
  };
};

const createAccount = (email, password, name) => {
  let myRes;
  return dispatch => {
    dispatch({ type: REQUEST_CREATE_ACCOUNT });
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        dispatch({ type: CREATE_ACCOUNT_SUCCESS });
        myRes = res;
        res.user
          .updateProfile({
            displayName: name
          })
          .then(() => {
            dispatch({ type: SIGN_IN_SUCCESS, payload: myRes });
          })
          .catch(error => {
            dispatch({ type: SIGN_IN_FAILURE, error });
          });
      })
      .catch(error => {
        dispatch({ type: CREATE_ACCOUNT_FAILURE, error });
      });
  };
};
const signin = (email, password) => {
  return dispatch => {
    dispatch({ type: REQUEST_SIGN_IN });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        dispatch({ type: SIGN_IN_SUCCESS, payload: res });
      })
      .catch(error => {
        dispatch({ type: SIGN_IN_FAILURE, error });
      });
  };
};

const signout = () => {
  return dispatch => {
    dispatch({ type: REQUEST_SIGN_OUT });
    firebase
      .auth()
      .signOut()
      .then(() => dispatch({ type: SIGN_OUT_SUCCESS }))
      .catch(error => {
        dispatch({ type: SIGN_OUT_FAILURE, error });
      });
  };
};

const updateFriendList = (data, uid, list) => {
  let temp = data ? data : {};
  temp[uid] = { list };

  return dispatch => {
    dispatch({ type: REQUEST_UPDATE_FRIENDS_LIST });
    firebase
      .database()
      .ref("/")
      .set(temp)
      .then(() => {
        dispatch({ type: UPDATE_FRIENDS_LIST_SUCCESS, payload: temp });
        alert("Exercise Added!");
      })
      .catch(error => {
        dispatch({ type: UPDATE_FRIENDS_LIST_ERROR });
      });
  };
};

export {
  initializeFirebase,
  fetchFirebase,
  clearFirebase,
  createAccount,
  signin,
  signout,
  updateFriendList
};
