import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import styles from './Spots.css';

function listing () {
    // const dispatch = useDispatch();
    return (
        <div>
            <div id={styles.listing_header}>
                <h3>Domes</h3>
                <div id={styles.listing_filters}>
                    <ul>
                        <button id={styles.filter_btn}>Anytime</button>
                        <button id={styles.filter_btn}>Guests</button>
                        <button id={styles.filter_btn}>Filters</button>
                    </ul>
                </div>
            </div>
            <div id={styles.listing_container}>
                
            </div>

        </div>
    );
}

export default listing;