import * as Types from '../../constant/shoppingBag';

let initialize = {
    count: 0
};

const reducer = (state = initialize, action) => {

    switch (action.type) {
        case Types.ADD_IN_BAG:
            return {
                count: action.payload
            };
        default:
            return state;
    }
}
export default reducer;