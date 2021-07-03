import * as Types from '../../constant/counter';

let initialize = {
    counter: 0
};

export const counter = (state = initialize, action = []) => {

    switch (action.type) {
        case Types.INCREMENT:
            return {
                counter: ++state.counter
            };
        case Types.DECREMENT:
            if (state.counter !== 0)
                return {
                    counter: --state.counter
                };
            break;
        default:
            return state;
    }
}