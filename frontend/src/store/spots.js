import { csrfFetch } from './csrf';

const ADD_DOME ='spots/addDome';
const REMOVE_DOME ='spots/removeDome';
const GET_ALL_DOMES ='spots/GET_ALL_DOMES';

const getAllDomes = (list) => ({
    type:GET_ALL_DOMES,
    list,
});



const addDome = (dome) =>{
    return {
        type: ADD_DOME,
        playload: dome,
    }
};

const removeDome = () => {
    return {
        type: REMOVE_DOME,
    }
};

export const getOneDome = (id) =>async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}`);
    if (response.ok) {
        const dome = await response.json();
        dispatch(addDome(dome));
    }
}

export const getDomes = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots');
    if (response.ok) {
        const list = await response.json();
        dispatch(getAllDomes(list));
    }
}

export const createDome  = (data) => async (dispatch)  =>{
    const response = await csrfFetch('/api/spots', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
        if (response.ok) {
        const dome = await response.json();
        dispatch(addDome(dome))
        return dome;
    }
}

export const updateDome = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${data.id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        const dome = await response.json();
        dispatch(addDome(dome))
        return dome;
    }
}

export const deleteDome = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}`, {
        method: 'DELETE',
    });
    dispatch(removeDome);
    return response;
}


 const initialState= {
     list:[]
 };


const spotsReducer = (state=initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_DOMES:
            const allDomes = {};
            action.list.forEach(dome => {
                allDomes[dome.id] = dome;
            });
            return {
                ...allDomes,
                ...state,
                list:action.list
            };
        case ADD_DOME:
            newState =Object.assign({}, state);
            newState.dome = action.payload;
            return newState;
        case REMOVE_DOME:
            newState = Object.assign({}, state);
            newState.dome = null;
            return newState;
        default:
            return state;
    }
}

export default spotsReducer;