import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDome } from '../../store/spots';
import { useHistory } from 'react-router-dom';
import * as sessionActions from '../../store/session';

const CreateDome = ({ hideForm }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)


    useEffect(() => {
        dispatch(sessionActions.restoreUser())
    }, [dispatch]);

    // const [spotId, setSpotId] = useState(id)
    const [url, setUrl] = useState('')
    const [userId, setUserId] = useState(sessionUser?.id);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [errors, setErrors] = useState([])

    useEffect(() => {
        let errs = []
        if (!url) {
            errs.push('You need to have a url.')
        }
        if (!address) {
            errs.push('You need to have an address.')
        }
        if (!city) {
            errs.push('City cannot be empty.')
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
    }, [url, address, city, state, country, name, price])

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
            hideForm()
            history.push(`/spots/${createdDome[0].id}`)
        }
    };

    const handleCancelClick = e => {
        e.preventDefault();
        hideForm()
    };

    return (
        <section className="create_form_container">
            <form onSubmit={handleSubmit} className="create_form_div">
                <div className="create_inputs">
                <input
                    type="text"
                    placeholder="URL"
                    required
                    value={url}
                    onChange={updateUrl}
                    className="create_input"
                />

                <input
                    type="text"
                    placeholder="Address"
                    required
                    value={address}
                    onChange={updateAddress}
                    className="create_input"
                />
                <input
                    type="text"
                    placeholder="City"
                    required
                    value={city}
                    onChange={updateCity}
                    className="create_input"
                />
                <input
                    type="text"
                    placeholder="State"
                    required
                    value={state}
                    onChange={updateState}
                    className="create_input"
                />
                <input
                    type="text"
                    placeholder="Country"
                    required
                    value={country}
                    onChange={updateCountry}
                    className="create_input"
                />
                <input
                    type="text"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={updateName}
                    className="create_input"
                />
                <input
                    type="number"
                    placeholder="Price"
                    required
                    value={price}
                    onChange={updatePrice}
                    className="create_input"
                />
                <button className="create_input" type='submit'>Create new Dome</button>
                <button className="create_input" type='button' onClick={handleCancelClick}>
                    Cancel
                </button>
                <ul>
                    {errors.map((error, i) => <li className="create_errors" key={i}>{error}</li>)}
                </ul>
                </div>
            </form>
        </section>
    )
}

export default CreateDome;