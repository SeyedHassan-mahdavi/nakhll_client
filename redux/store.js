import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Reducer } from './combineReducers';

/**
 * middlewareFunction work on redux middlware
 * @param {process.env.NODE_ENV} env it use for verison of software
 * @returns {array} middlware it returns redux middlware 
 */
export function middlewareFunction(env = process.env.NODE_ENV) {
    let middleware = [];
    env === 'production' ? middleware = [thunk] : middleware = [thunk, logger];
    return middleware;
}
/**
 * varible store recive reducer and
 * middlware from createStore
 */
export const store = createStore(Reducer, applyMiddleware(...middlewareFunction()));