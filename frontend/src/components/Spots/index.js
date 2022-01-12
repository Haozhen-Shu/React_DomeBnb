import React, { useEffect, useState } from "react";
import { NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import styles from './Spots.css';
import {getDomes} from '../../store/spots';
import CreateDome from '../CreateDome';

function SpotsPage ({hideForm}) {
    const dispatch = useDispatch();
    const domes = useSelector(state => state.spots);
    const [showCreateDome, setShowCreateDome] = useState(false);
    let dome_list;
    let image_list;

    if (domes.allDomes) {
        dome_list = Object.values(domes.allDomes);
    }

    if (domes.allImages) {
       image_list = Object.values(domes.allImages)
    }

    useEffect(() => {
        dispatch(getDomes(domes))
        setShowCreateDome(false);
    },[dispatch]);
    
    if (!domes.allDomes || !domes.allImages) {
        return null;
    }

     let sub_content = (
         <div id={styles.listing_container}>
             {dome_list.map(dome => {
                 const img = image_list.find(img => img.spotId === dome.id)
                 if (img)
                 return (
                     <NavLink id={styles.spot_container} key={dome.id} to={`/spots/${dome.id}`}>
                         <img src={img.url} alt={dome.name} key={img.id} className={styles.spots_dome_img}></img>
                         <div key={dome.name} className={styles.spots_dome_name}>{dome.name}</div>
                         <div key={dome.price} className={styles.spots_dom_price}>{dome.price}</div>
                         <div key={dome.address} className={styles.spots_dom_address}>{dome.address}</div>
                     </NavLink>
                 )
             })}
         </div>
     )

     let content = null;
     if (showCreateDome) {
         content = (
             <CreateDome
             hideForm={()=>setShowCreateDome(false)}
             />
         )
     } else {
         content =(
             <div>
             <div id={styles.listing_header}>
                 <p>Domes</p>
                 <div id={styles.listing_filters}>
                     <button onClick={() => setShowCreateDome(true)}>Add</button>
                     {/* <button id={styles.filter_btn}>Anytime</button>
                    <button id={styles.filter_btn}>Guests</button>
                    <button id={styles.filter_btn}>Filters</button> */}
                 </div>
             </div>
             <div>
                 {sub_content}
             </div>
             </div>
         )
     }

    return (
        <div>       
            {content}
        </div>
    );
}

export default SpotsPage;