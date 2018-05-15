import * as Types from '../../constants/ActionType';
import * as Config from '../../constants/Config';
import axios from 'axios';

export const actFetchCategoriesRequest = () => {
    return (dispatch) => {
        return axios.get(Config.API_URL + '/categories').then(res => {
            // console.log(res.data)
            dispatch(actFetchCategories(res.data));
        })
    }
}

export const actFetchCategories = (categories) => {
    return {
        type: Types.FETCH_CATEGORIES,
        categories
    }
}

export const searchCategoryRequest = (keywork) => {
    return (dispatch) => {
        return axios.get(Config.API_URL + '/category/search', {params: {keywork: keywork}}).then(res => {
            dispatch(searchCategory(res.data));
        })
    }
}

export const searchCategory = (categories) => {
    return {
        type: Types.SEARCH_CATEGORIES,
        categories
    }
}

export const actAddCategoryRequest = (category) => {
    return (dispatch) => {
        return axios.post(Config.API_URL + '/categories', category).then(res => {
            dispatch(actAddCategory(res.data))
        })
    }
}

export const actAddCategory = (category) => {
    return {
        type: Types.ADD_CATEGORY,
        category
    }
}

export const actUpdateCategoryRequest = (category) => {
    return (dispatch) => {
        return axios.put(Config.API_URL + `/categories/${category.id}`, category).then(res => {
            if (res) {
                dispatch(actUpdateCategory(res.data));
            }
        })
    }
}

export const actUpdateCategory = (category) => {
    return {
        type: Types.UPDATE_CATEGORY,
        category
    }
}

export const actDeleteCategoryRequest = (id) => {
    return (dispatch) => {
        return axios.delete(Config.API_URL + `/categories/${id}`).then(res => {
            if (res) {
                dispatch(actDeleteCategory(id));
            }
        })
    }
}

export const actDeleteCategory = (id) => {
    return {
        type: Types.DELETE_CATEGORY,
        id
    }
}

export const actGetCategoryRequest = (id) => {
    return dispatch => {
        return axios.get(Config.API_URL + `/categories/${id}`).then(res => {
            dispatch(actGetCategory(res.data));
        })
    }
}

export const actGetCategory = (category) => {
    return {
        type : Types.EDIT_CATEGORY,
        category
    }
}