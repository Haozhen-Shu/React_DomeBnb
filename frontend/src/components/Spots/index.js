import React, { useEffect, useState } from "react";
import { NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
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
         <section id="listing_container">
             {dome_list.map(dome => {
                 const img = image_list.find(img => img.spotId === dome.id)
                 if (img)
                 return (
                     <NavLink id="spot_nav" key={dome.id} to={`/spots/${dome.id}`}>
                         <div className="spot_container">
                            <img src={img.url} alt={dome.name} key={img.id} className="spots_dome_img"></img>
                         </div>
                         <div className="info_container">
                            <span key={dome.name} className="spots_dome_name">{dome.name}</span>
                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span key={dome.price} className="spots_dom_price">${dome.price}/night</span>
                            {/* <div key={dome.address} className="spots_dom_address">{dome.address}</div> */}
                        </div>
                     </NavLink>
                 )
             })}
         </section>
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
             <div id="listing_header">
                 <p className="dome">Domes</p>
                 <div id="listing_filters">
                     <button className="add_btn" onClick={() => setShowCreateDome(true)}>Add a new dome</button>
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