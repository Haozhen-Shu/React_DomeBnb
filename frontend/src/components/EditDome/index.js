import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {updateDome} from '../../store/spots';
import * as sessionActions from '../../store/session';


const EditDome = ({dome, hideForm}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    
    useEffect(() => {
        dispatch(sessionActions.restoreUser())
    }, [dispatch]);

    const [address, setAddress] = useState(dome.address);
    const [city, setCity] = useState(dome.city);
    const [state, setState] = useState(dome.state);
    const [country, setCountry] = useState(dome.country);
    const [name, setName] = useState(dome.name)
    const [price, setPrice] = useState(dome.price);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        let errs = []
        if (!address) {
            errs.push('You need to have a address.')
        }
        if (!city) {
            errs.push('You need to have an city.')
        }
        if (!state) {
            errs.push('State cannot be empty.')
        }
        if (!country) {
            errs.push('Country cannot be empty.')
        }
        if (!name) {
            errs.push('Name cannot be empty and must be unique.')
        }
        if (!price) {
            errs.push('You need to set a price.')
        }
        setErrors(errs)
    }, [address, city, state, country, name, price])


    const updateAddress = e => setAddress(e.target.value);
    const updateCity = e => setCity(e.target.value);
    const updateState = e => setState(e.target.value);
    const updateCountry = e => setCountry(e.target.value);
    const updateName = e => setName(e.target.value);
    const updatePrice = e => setPrice(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...dome,
            address,
            city,
            state,
            country,
            name,
            price   
        } ;
        let updatedDome = await dispatch(updateDome(payload));
        if (updatedDome) {
            hideForm();
        }
    }

    const handleCancelClick = e => {
        e.preventDefault();
        hideForm();
    }

    return (
        <section className='edit_form_container'>
            <form className="edit_form" onSubmit={handleSubmit}>
            <div className="label_input">
                <div className="labels">
                    <label>Address</label>
                    <label>City</label>
                    <label>State</label>
                    <label>Country</label>
                    <label>Name</label>
                    <label>Price($/night)</label>
                </div>
                <div className="inputs">
                    <input
                        type="text"
                        required
                        value={address}
                        onChange={updateAddress}
                        className="edit_input"
                    />
                    <input
                        type="text"
                        required
                        value={city}
                        onChange={updateCity}
                        className="edit_input"
                    />
                    <input
                        type="text"
                        required
                        value={state}
                        onChange={updateState}
                        className="edit_input"
                    />
                    <input
                        type="text"
                        required
                        value={country}
                        onChange={updateCountry}
                        className="edit_input"
                    />
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={updateName}
                        className="edit_input"
                    />
                    <input
                        type="number"
                        required
                        value={price}
                        onChange={updatePrice}
                        className="edit_input"
                    />
                </div>
            </div>
            <div>
                <div className="edit_cancel_btns">
                    <button className="edit_btn" type='submit'>Update A Dome</button>
                    <button className="cancel_btn" type='button' onClick={handleCancelClick}>
                        Cancel
                    </button>
                </div>
                    <ul>
                        {errors.map((error, i) => <li className="edit_errors" key={i}>{error}</li>)}
                    </ul>
            </div>
            </form>
        </section>
    )
}

export default EditDome;