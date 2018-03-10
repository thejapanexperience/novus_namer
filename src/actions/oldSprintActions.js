import axios from 'axios'
import * as types from './actionTypes';

import {getFormattedDateTime} from '../utils/dates';

// example of a thunk using the redux-thunk middleware
export function getSprints() {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings

    axios.get('/api/sprints')
    .then( response => {
      console.log(response);
    })
    .catch( error => {
      console.log(error);
    });


    return dispatch({
      type: types.GET_SPRINTS,
      sprint
    });
  };
}

export function addSprint(sprint) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings

    axios.post('/api/sprints', sprint)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });


    return dispatch({
      type: types.ADD_SPRINT,
      sprint
    });
  };
}

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

export function calculateFuelSavings(settings, fieldName, value) {
  return {
    type: types.CALCULATE_FUEL_SAVINGS,
    dateModified: getFormattedDateTime(),
    settings,
    fieldName,
    value
  };
}
