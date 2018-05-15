import * as Types from '../../constants/ActionType';

var initialState = [];

const books = (state = initialState, action) => {
    var { book, id } = action;
    var index = -1;
    switch (action.type) {
        case Types.FETCH_BOOKS:
            return [...action.books];
        case Types.SEARCH_BOOKS:
            return [...action.books];
        case Types.APPROVE_BOOK:
            index = findIndex(state, id);
            state[index] = id;
            return [...action.books];
        case Types.UPDATE_USER:
            index = findIndex(state, book.id);
            state[index] = book;
            return [...state];
        case Types.DELETE_BOOK:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        default: return [...state];
    }
};

var findIndex = (books, id) => {
    var result = -1;
    books.forEach((book, index) => {
        if (book.id === id) {
            result = index;
        }
    });
    return result;
}

export default books;
