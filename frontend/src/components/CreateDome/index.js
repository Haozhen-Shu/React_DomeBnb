import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {createDome} from '../../store/spots';
import { useHistory } from 'react-router-dom';

const CreateDome = ({hideForm}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    
    // const [spotId, setSpotId] = useState(id)
    const [url,setUrl] =useState('')
    const [userId, setUserId] = useState(0);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [name, setName] = useState('')
    const [price, setPrice] =useState(0)
    
    // const updateSpotId = e => setSpotId(e.target.value)
    const updateUrl = e => setUrl(e.target.value)
    const updateUserId = e => setUserId(e.target.value);
    const updateAddress = e => setAddress(e.target.value);
    const updateCity = e => setCity(e.target.value);
    const updateState = e => setState(e.target.value);
    const updateCountry = e => setCountry(e.target.value);
    const updateName = e => setName(e.target.value);
    const updatePrice = e => setPrice(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            // spotId,
            url,
            userId,
            address,
            city,
            state,
            country,
            name,
            price
        };

        let createdDome = await dispatch(createDome(payload));
        if (createdDome) {
            history.push(`/spots/${createdDome[0].id}`)
            hideForm()
        }
    };

    const handleCancelClick = e => {
        e.preventDefault();
        hideForm()
    };

    return (
        <section className="create_form_container center middled">
            <form onSubmit={handleSubmit}>
                {/* <input
                type="userId"
                placeholder="SpotId"
                required
                value={id}
                onChange={updateSpotId}
                /> */}
                <input
                type="text"
                placeholder="URL"
                required
                value={url}
                onChange={updateUrl}
                />
                <input
                type="number"
                placeholder="UserId"
                required
                value={userId}
                onChange={updateUserId}
                />
                <input
                    type="text"
                    placeholder="Address"
                    required
                    value={address}
                    onChange={updateAddress}
                />
                <input
                    type="text"
                    placeholder="City"
                    required
                    value={city}
                    onChange={updateCity}
                />
                <input
                    type="text"
                    placeholder="State"
                    required
                    value={state}
                    onChange={updateState}
                />
                <input
                    type="text"
                    placeholder="Country"
                    required
                    value={country}
                    onChange={updateCountry}
                />
                <input
                    type="text"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={updateName}
                />
                <input
                    type="number"
                    placeholder="Price"
                    required
                    value={price}
                    onChange={updatePrice}
                />
                <button type='submit'>Create new Dome</button>
                <button type='button' onClick={handleCancelClick}>
                    Cancel
                </button>
            </form>
        </section>
    )    
}

export default CreateDome;