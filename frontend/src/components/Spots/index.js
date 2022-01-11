import React, { useEffect, useState } from "react";
import {useParams, NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import styles from './Spots.css';
import {getDomes} from '../../store/spots';

function SpotsPage () {
    // const dispatch = useDispatch();
    // const {domeId} = useParams();
    // const dome = useSelector(state => {
    //     // console.log("state", state)
    //     return state.spots.list.map(domeId => state.spots[domeId]);
    // })

    // useEffect(() => {
    //     dispatch(getDomes())
    // },[dispatch]);
    
    // if (!dome) {
    //     return null;
    // }

    return ( null
    //     <div>
    //         <div id={styles.listing_header}>
    //             <h3>Domes</h3>
    //             <div id={styles.listing_filters}>
    //                 <button id={styles.filter_btn}>Anytime</button>
    //                 <button id={styles.filter_btn}>Guests</button>
    //                 <button id={styles.filter_btn}>Filters</button>
    //             </div>
    //         </div>
    //         <div id={styles.listing_container}>
    //             {dome.map(dome => {
    //                 return (
    //                     <NavLink id={styles.spot_container} key={dome.name} to={`/spots/${domeId}`}>
    //                         <img src={dome.url} alt={dome.name} className={styles.spots_dome_img}></img>
    //                         <div className={styles.spots_dome_name}>{dome.name}</div>
    //                         <div className={styles.spots_dom_price}>{dome.price}</div>
    //                         <div className={styles.spots_dom_address}>{dome.address}</div>
    //                     </NavLink>
    //                 )
    //             } )}
    //         </div>

    //     </div>
    );
}

export default SpotsPage;