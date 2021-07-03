// reducers
import { combineReducers } from 'redux';
import { counter } from './reducers/counter/reducer';
import { modal } from './reducers/modal/reducer';
import { todo } from './reducers/todoList/reducer';
import shopingBag from './reducers/shoppingBag/reducer';
// get all redusers in this value
let allRedusers = {
    counter,
    modal,
    todo,
    shopingBag
};
// run all reducers
export const Reducer = combineReducers(allRedusers);
