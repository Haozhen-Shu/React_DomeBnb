import { csrfFetch } from './csrf';
import {useParams} from 'react-router-dom';

const ADD_DOME ='spots/addDome';
const REMOVE_DOME ='spots/removeDome';
const GET_ALL_DOMES ='spots/GET_ALL_DOMES';
const UPDATE_DOME = 'spots/UPDATE_DOME';

const getAllDomes = (list) => ({
    type:GET_ALL_DOMES,
    list,
});

const updatedDome = (payload)=>{
    return {
        type:UPDATE_DOME,
        payload,
    }
}


const addDome = (dome) =>{
    return {
        type: ADD_DOME,
         dome,
    }
};

const removeDome = (id) => {
    return {
        type: REMOVE_DOME,
        id,
    }
};

export const getOneDome = (id) =>async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}`);
    // console.log(response)
    if (response.ok) {
        const dome = await response.json();
        console.log("juice", dome)
        dispatch(addDome(dome));
    }
}

export const getDomes = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots');
    // console.log(response)
    if (response.ok) {

        const list = await response.json();
        // console.log(list)
        dispatch(getAllDomes(list));
    }
}
// export const getDomes = () => async (dispatch) => {
//     const response = await csrfFetch('/api/spots');
//     if (response.ok) {
//         const list = await response.json();
//         dispatch(getAllDomes(list));
//     }
// }

export const createDome  = (data) => async (dispatch)  =>{
    const response = await csrfFetch('/api/spots', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
        if (response.ok) {
        const dome = await response.json()
        console.log("pear", dome)
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
        console.log("orange",dome)
        dispatch(updatedDome(dome))
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
            const allImages = {};
            action.list[0].forEach(dome => {
                allDomes[dome.id] = dome;
            });
            action.list[1].forEach(img =>{
                allImages[img.id] = img;
            })
            return {
                allDomes,
                allImages,
                list:action.list
            };
        case ADD_DOME:
            newState =Object.assign({}, state);
            console.log("edit dome",action.dome);
            newState.allDomes[action.dome[0].id] = action.dome[0];
            newState.allImages[action.dome[1].id] = action.dome[1];
            return newState;
        case UPDATE_DOME:
            newState = Object.assign({}, state);
            newState.allDomes[action.payload.id] = action.payload;
            return newState;
        case REMOVE_DOME:
            const newState2 = Object.assign({}, state); 
            delete newState2.allDomes[action.id];
            delete newState2.allImages[action.spotId];
            // newState2.allDomes.filter(dome => dome.id !== action.id)
            // newState2.allImages.filter(img => img.spotId !== action.id)
            return newState2;
        default:
            return state;
    }
}

export default spotsReducer;