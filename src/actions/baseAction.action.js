import { INITIALIZE, INITIALIZE_SUCCESS, INITIALIZE_ERROR } from "./types";

const fetchFoo = async () => {
  return "foo";
};

const initializeFoo = () => {
  return dispatch => {
    dispatch({ type: INITIALIZE });

    fetchFoo()
      .then(foo => {
        dispatch({ type: INITIALIZE_SUCCESS, payload: foo });
      })
      .catch(error => {
        dispatch({ type: INITIALIZE_ERROR });
      });
  };
};

export { initializeFoo };
