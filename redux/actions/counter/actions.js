import * as Types from '../../constant/counter';


export const increment = () => ({
    type: Types.INCREMENT
});

export const decrement = () => ({
    type: Types.DECREMENT
})