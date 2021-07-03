import * as Constants from '../../constant/shoppingBag'; // constants
// action of accounting list
export const addBag = (count) => dispatch => {

    // dispatch
    dispatch({
        type: Constants.ADD_IN_BAG,
        payload: count + 1
    });
}