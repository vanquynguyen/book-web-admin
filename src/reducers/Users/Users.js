import * as Types from '../../constants/ActionType';

var initialState = [];

const users = (state = initialState, action) => {
    var { user, id } = action;
    var index = -1;
    switch (action.type) {
        case Types.FETCH_USERS:
            return [...action.users];
        case Types.SEARCH_USERS:
            return [...action.users];
        case Types.ADD_USER:
            state.push(user);
            return [...state];
        case Types.APPROVE_USER:
            index = findIndex(state, id);
            state[index] = id;
            return [...action.users];
        case Types.UPDATE_USER:
            index = findIndex(state, user.id);
            state[index] = user;
            return [...state];
        case Types.DELETE_USER:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        default: return [...state];
    }
};

var findIndex = (users, id) => {
    var result = -1;
    users.forEach((user, index) => {
        if (user.id === id) {
            result = index;
        }
    });
    return result;
}

export default users;
