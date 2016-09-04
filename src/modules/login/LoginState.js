import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop';
import * as crmLoginService from '../../services/crm/loginService';

// Initial state
const initialState = Map({
    loggedIn: false,
    loggingIn: false,
    loginError: '',
});

// Actions
const LOGIN = 'LoginState/LOGIN';
const LOGOUT = 'LoginState/LOGOUT';


// Action creators
export async function login(username, password) {
    return {
        type: LOGIN,
        payload: await crmLoginService.crmLogin(username, password)
    };
}

export async function logout() {
    return {type: LOGOUT, payload: await crmLoginService.crmLogout()};
}


// Reducer
export default function LoginStateReducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOGIN:

            return loop(
                state.set('loggedIn', false),
                state.set('loggingIn', true),
                state.set('loginError', ''),
                Effects.promise(login())
            );


        case LOGOUT:
            return initialState;


        default:
            return state;
    }
}
