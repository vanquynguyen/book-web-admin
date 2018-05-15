import * as Types from '../../constants/ActionType';

var initialState = [];

const categories = (state = initialState, action) => {
    var { category, id } = action;
    var index = -1;
    switch (action.type) {
        case Types.FETCH_CATEGORIES:
            return [...action.categories];
        case Types.SEARCH_CATEGORIES:
            return [...action.categories];
        case Types.ADD_CATEGORY:
            state.push(category);
            return [...state];
        case Types.UPDATE_CATEGORY:
            index = findIndex(state, category.id);
            state[index] = category;
            return [...state];
        case Types.DELETE_CATEGORY:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        default: return [...state];
    }
};

var findIndex = (categories, id) => {
    var result = -1;
    categories.forEach((category, index) => {
        if (category.id === id) {
            result = index;
        }
    });
    return result;
}

export default categories;