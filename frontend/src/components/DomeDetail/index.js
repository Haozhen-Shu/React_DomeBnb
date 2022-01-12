import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {getOneDome, getDomes, deleteDome} from '../../store/spots';
import EditDome from '../EditDome';

const DomeDetail = () => {
    
    const {id} = useParams();
    const domes = useSelector(state=>state.spots)
    console.log("domes", domes)
    const [showEditDome, setShowEditDome] = useState(false);
    const dispatch = useDispatch();
    
    let dome_list;
    let image_list;
    
    if (domes.allDomes) {
        dome_list = Object.values(domes.allDomes);
    }
    
    if (domes.allImages) {
        image_list = Object.values(domes.allImages)
    }

    const [list, updateList] = useState(dome_list);
    const [img, updateImg] = useState(image_list);
    
    useEffect(() => {
        setShowEditDome(false);
        dispatch(getDomes(domes))
        dispatch(deleteDome)
    }, [dispatch]);

    if (!domes.allDomes || !domes.allImages) {
        return null;
    }

    const dome_item = dome_list.find(dome => dome.id = id);
    const image_item = image_list.find(img => img.spotId == id);
    

    
    const handleRemoveItem = e => {
       updateList(list.filter(item => item.id !== id));
       updateImg(img.filter(item => item.spotId !== id))
    }
    
    let content = null;
    let sub_content = (
        <div className='dome_detail_list'>
            <h2>Information</h2>
            <button onClick={() => setShowEditDome(true)}>Edit</button>
            <button onClick={handleRemoveItem}>Delete</button>
            <ul>
                <li>
                    <img src={image_item.url} alt={image_item.id} ></img>
                </li>
                <li>
                    <b>userId</b> {dome_item.userId}
                </li>
                <li>
                    <b>Address</b> {dome_item.address}
                </li>
                <li>
                    <b>City</b> {dome_item.city}
                </li>
                <li>
                    <b>State</b> {dome_item.state}
                </li>
                <li>
                    <b>Country</b> {dome_item.country}
                </li>
                <li>
                    <b>Name</b> {dome_item.name}
                </li>
                <li>
                    <b>Price</b> {dome_item.price}
                </li>
            </ul>
        </div>
    );


    if (showEditDome) {
        content = (
            <EditDome
            dome={dome_item}
            hideForm={()=>setShowEditDome(false)}
            />
        )
    } else {
      content = sub_content;
    } ;

    return (
        <div className='dome_detail'>
            {content}
        </div>
    )

}

export default DomeDetail;