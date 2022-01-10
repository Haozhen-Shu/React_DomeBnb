import { csrfFetch } from './csrf';

const ADD_DOME ='listing/addDome';
const REMOVE_DOME ='listing/removeDome';

const addDome = (dome) =>{
    return {
        type: ADD_DOME,
        playload: dome,
    }
}

const removeDome = () => {
    return {
        type: REMOVE_DOME,
    }
}

 export const addDome  =()

const spotsReducer = () => {

}

export default spotsReducer;