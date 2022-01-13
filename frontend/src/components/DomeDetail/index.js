import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {getOneDome, getDomes, deleteDome} from '../../store/spots';
import EditDome from '../EditDome';

const DomeDetail = () => {
    
    const {id} = useParams();
    const dome = useSelector(state=>state.spots.allDomes[id]);
    const img = useSelector(state=>state.spots.allImages.spotId===id)
    console.log(dome)

    const [showEditDome, setShowEditDome] = useState(false);
    const dispatch = useDispatch();
    
    useEffect(() => {
        setShowEditDome(false);
        dispatch(getOneDome(id));
    }, [dispatch, id]);
  
    // const handleRemoveItem = e => {
    //     Object.values(dome_list).filter(item => item.id !== id)
    //     Object.values(image_list).filter(item => item.spotId !== id)
    //    updateList(list.filter(item => item.id !== id));
    //    updateImg(img.filter(item => item.spotId !== id))
    // }

    
    let content = null;
    let sub_content = (
        <div className='dome_detail_list'>
                <h2>Information</h2>
                <div className="detail_image_containter">
                    <img src={img.url} alt={img.id} className="detail_image" ></img>
                </div>
                <div>
            <div className="edit_btn_container">
                <button className="edit_btn" onClick={() => setShowEditDome(true)}>Edit</button>
                {/* <button className="delete_btn" onClick={handleRemoveItem}>Delete</button> */}
               </div>
            <ul className="detail_info_container">
             
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
       </div>
    );


    if (showEditDome) {
        content = (
            <EditDome
            dome={dome}
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