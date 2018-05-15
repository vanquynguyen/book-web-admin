import * as Types from '../../constants/ActionType';
import * as Config from '../../constants/Config';
import axios from 'axios';

export const actFetchUsersRequest = () => {
    return (dispatch) => {
        return axios.get(Config.API_URL + '/users').then(res => {
            // console.log(res.data)
            dispatch(actFetchUsers(res.data));
        })
    }
}

export const actFetchUsers = (users) => {
    return {
        type: Types.FETCH_USERS,
        users
    }
}

export const searchUserRequest = (keywork) => {
    return (dispatch) => {
        return axios.get(Config.API_URL + '/user/search', {params: {keywork: keywork}}).then(res => {
            dispatch(searchUser(res.data));
        })
    }
}

export const searchUser = (users) => {
    return {
        type: Types.SEARCH_USERS,
        users
    }
}

export const actAddUserRequest = (user) => {
    return (dispatch) => {
        return axios({
            method: 'post',
            url: Config.API_URL + '/users', 
            data: user,
            headers: {
                'Content-Type': 'multipart/form-data' 
            }
        })
        .then(res => {
            dispatch(actAddUser(res.data)) 
        })
    }
}

export const actAddUser = (user) => {
    return {
        type: Types.ADD_USER,
        user
    }
}

export const actApproveUserRequest = (id) => {
    return (dispatch) => {
        return axios.get(Config.API_URL + `/user/approve/${id}`).then(res => {
            console.log(res)
            if (res) {
                dispatch(actApproveUser(res.data));
                console.log(res.data)
            }
        })
    }
}

export const actApproveUser = (users) => {
    return {
        type: Types.APPROVE_USER,
        users
    }
}

// export const actUpdateCategoryRequest = (category) => {
//     return (dispatch) => {
//         return axios.put(Config.API_URL + '/categories', category).then(res => {
//             if (res) {
//                 dispatch(actUpdateCategory(res.data));
//             }
//         })
//     }
// }

// export const actUpdateCategory = (category) => {
//     return {
//         type: Types.UPDATE_CATEGORY,
//         category
//     }
// }

export const actDeleteUserRequest = (id) => {
    return (dispatch) => {
        return axios.delete(Config.API_URL + `/users/${id}`).then(res => {
            if (res) {
                dispatch(actDeleteUser(id));
            }
        })
    }
}

export const actDeleteUser = (id) => {
    return {
        type: Types.DELETE_USER,
        id
    }
}

// export const actGetCategoryRequest = (id) => {
//     return dispatch => {
//         return axios.get(Config.API_URL + `/categories/${id}`).then(res => {
//             dispatch(actGetCategory(res.data));
//         })
//     }
// }

// export const actGetCategory = (category) => {
//     return {
//         type : Types.EDIT_CATEGORY,
//         category
//     }
// }