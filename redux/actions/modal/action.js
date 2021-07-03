import * as Types from '../../constant/modal';

export const showModal = (message) => ({
    type: Types.SHOW_MODAL,
    message
});

export const hideModal = () => ({
    type: Types.HIDE_MODAL,
});