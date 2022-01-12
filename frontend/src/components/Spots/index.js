import React, { useEffect, useState } from "react";
import {useParams, NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import styles from './Spots.css';
import {getDomes} from '../../store/spots';

function SpotsPage () {
    const dispatch = useDispatch();
    // const {domeId} = useParams();
    const domes = useSelector(state => state.spots);
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
    },[dispatch]);
    
    if (!domes.allDomes || !domes.allImages) {
        return null;
    }

    return (
        <div>
            <div id={styles.listing_header}>
                <p>Domes</p>
                <div id={styles.listing_filters}>
                    <button id={styles.filter_btn}>Anytime</button>
                    <button id={styles.filter_btn}>Guests</button>
                    <button id={styles.filter_btn}>Filters</button>
                </div>
            </div>
            <div id={styles.listing_container}>
                {dome_list.map(dome => {
                    const img = image_list.find(img =>img.spotId === dome.id)
                    return (
                        <NavLink id={styles.spot_container} key={dome.id} to={`/spots/${dome.id}`}>
                            <img src={img.url} alt={dome.name} key={img.id} className={styles.spots_dome_img}></img>
                            <div key={dome.name} className={styles.spots_dome_name}>{dome.name}</div>
                            <div key={dome.price} className={styles.spots_dom_price}>{dome.price}</div>
                            <div key={dome.address} className={styles.spots_dom_address}>{dome.address}</div>
                        </NavLink>
                    )
                } )}
            </div>

        </div>
    );
}

export default SpotsPage;