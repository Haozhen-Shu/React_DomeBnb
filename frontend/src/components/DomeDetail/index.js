import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {getOneDome} from '../../store/spots';
import EditDome from '../EditDome';

const DomeDetail = () => {
    console.log("banana")

    const {domeId } = useParams();
    const dome = useSelector(state=>state.spots[domeId]);
    console.log("dometail", dome)
    const [showEditDome, setShowEditDome] = useState(false);
    const dispatch = useDispatch();

    useEffect (() => {
        setShowEditDome(false);
        dispatch(getOneDome(domeId));
    }, [domeId])
    
    if (!dome) {
        return null;
    }

    return (
        <div className='dome_detail_list'>
            <h2>Information</h2>
            <button onClick={()=>setShowEditDome(true)}>Edit</button>
            <ul>
                <li>
                    <b>userId</b> {dome.userId}
                </li>
                <li>
                    <b>Address</b> {dome.address}
                </li>
                <li>
                    <b>City</b> {dome.city}
                </li>
                <li>
                    <b>State</b> {dome.state}
                </li>
                <li>
                    <b>Country</b> {dome.country}
                </li>
                <li>
                    <b>Name</b> {dome.name}
                </li>
                <li>
                    <b>Price</b> {dome.price}
                </li>
            </ul>
        </div>
    )

}

export default DomeDetail;