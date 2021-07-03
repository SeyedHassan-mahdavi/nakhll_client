import * as Types from '../../constant/modal';

let initialize = {
    display: 'none',
    classCustom: '',
    message: ''
}

export const modal = (state = initialize, action = {}) => {
    switch (action.type) {
        case Types.SHOW_MODAL:
            return {
                display: 'block',
                classCustom: 'show',
                message: action.message
            }
        case Types.HIDE_MODAL:
            return {
                display: 'none',
                classCustom: '',
                message: ''
            }
        default:
            return state;
    }
}