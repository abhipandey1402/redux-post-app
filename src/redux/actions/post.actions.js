
// let initialState = {
//     loading: true,
//     data: [],
//     error: ''
// }
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actionTypes';
import axios from 'axios';

// actions creators: 

export const fetchDataRequest = () => {
    return {
        type: FETCH_DATA_REQUEST
    }
}

export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}

export const fetchDataFailure = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
    }
}

// api request => impure function
// action  => object => function instead of object


// step 1 => start the api request =>  dispatch(fetchDataRequest()) 

// step 2 => if success => dispatch(fetchDataSuccess(data))

// step 3 => if error => dispatch(fetchDataFailure(error))

export const fetchPost = () => {
    return (
        async (dispatch) => {
            dispatch(fetchDataRequest())

            try {
                const response = await axios.get('https://gauravgitacc.github.io/postAppData/posts.json');
                dispatch(fetchDataSuccess(response.data))
            }
            catch (error) {
                dispatch(fetchDataFailure(error.message))
            }
        }
    )
}





