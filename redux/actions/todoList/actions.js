import * as Types from '../../constant/todoList';

export const addToDo = (value) => ({
    type: Types.ADD_TODO_LIST,
    value
});