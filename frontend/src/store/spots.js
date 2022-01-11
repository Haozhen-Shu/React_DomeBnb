import { csrfFetch } from './csrf';
import {useDispatch} from 'react-redux';

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

export const getDomes = () => async (dispath) => {
    const dispatch = useDispatch();
    const response = await csrfFetch('/api/spots');
    if (response.ok) {
        const list = await response.json();
        dispatch(getAllDomes(list));
    }
}

export const createDome  = (dome) => async (dispatch)  =>{
    const {userId,address,city,state,country,name,price} = dome;
    const response = await csrfFetch('/api/spots', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId,
            address,
            city,
            state, 
            country,
            name,
            price,
        })
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(addDome(data.dome))
        return data;
    }
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
        default:
            return state;
    }
}

export default spotsReducer;