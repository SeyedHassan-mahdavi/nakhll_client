import * as Types from '../../constant/todoList';

let initialize = {
    todoList: []
};

export const todo = (state = initialize, action = {}) => {

    switch (action.type) {
        case Types.ADD_TODO_LIST:
            return {
                todoList: [...state.todoList, action.value]
            };
        default:
            return state;
    }
}