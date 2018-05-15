import * as Types from '../../constants/ActionType';
import * as Config from '../../constants/Config';
import axios from 'axios';

export const actFetchBooksRequest = () => {
    return (dispatch) => {
        return axios.get(Config.API_URL + '/books').then(res => {
            dispatch(actFetchBooks(res.data));
        })
    }
}

export const actFetchBooks = (books) => {
    return {
        type: Types.FETCH_BOOKS,
        books
    }
}

export const searchBooksRequest = (keywork) => {
    return (dispatch) => {
        return axios.get(Config.API_URL + '/book/search', {params: {keywork: keywork}}).then(res => {
            dispatch(searchBook(res.data));
        })
    }
}

export const searchBook = (books) => {
    return {
        type: Types.SEARCH_BOOKS,
        books
    }
}

export const actApproveBookRequest = (id) => {
    return (dispatch) => {
        return axios.get(Config.API_URL + `/book/approve/${id}`).then(res => {
            if (res) {
                dispatch(actApproveBook(res.data));
            }
        })
    }
}

export const actApproveBook = (books) => {
    return {
        type: Types.APPROVE_BOOK,
        books
    }
}

export const actDeleteBookRequest = (id) => {
    return (dispatch) => {
        return axios.delete(Config.API_URL + `/books/${id}`).then(res => {
            if (res) {
                dispatch(actDeleteBook(id));
            }
        })
    }
}

export const actDeleteBook = (id) => {
    return {
        type: Types.DELETE_BOOK,
        id
    }
}
