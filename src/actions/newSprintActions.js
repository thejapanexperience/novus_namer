import axios from 'axios'
import * as types from './actionTypes';

export function getNominations(sprint) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings

    axios.get(`/api/nominations`)
    .then( response => {
      console.log(response);
    })
    .catch( error => {
      console.log(error);
    });

    return dispatch({
      type: types.GET_NOMINATIONS,
      sprint
    });
  };
}

export function addNomination(nomination, sprint) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.ADD_NOMINATION_TO_SPRINT,
      nomination,
      sprint
    });
  };
}
