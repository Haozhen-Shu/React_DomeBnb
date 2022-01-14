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

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0);
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
                <input
                    type="text"
                    placeholder="Address"
                    required
                    value={address}
                    onChange={updateAddress}
                    className="edit_input"
                />
                <input
                    type="text"
                    placeholder="City"
                    required
                    value={city}
                    onChange={updateCity}
                    className="edit_input"
                />
                <input
                    type="text"
                    placeholder="State"
                    required
                    value={state}
                    onChange={updateState}
                    className="edit_input"
                />
                <input
                    type="text"
                    placeholder="Country"
                    required
                    value={country}
                    onChange={updateCountry}
                    className="edit_input"
                />
                <input
                    type="text"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={updateName}
                    className="edit_input"
                />
                <input
                    type="number"
                    placeholder="Price"
                    required
                    value={price}
                    onChange={updatePrice}
                    className="edit_input"
                />
                <button className="edit_btn" type='submit'>Update A Dome</button>
                <button className="cancel_btn" type='button' onClick={handleCancelClick}>
                    Cancel
                </button>
                <ul>
                    {errors.map((error, i) => <li className="edit_errors" key={i}>{error}</li>)}
                </ul>

            </form>
        </section>
    )
}

export default EditDome;