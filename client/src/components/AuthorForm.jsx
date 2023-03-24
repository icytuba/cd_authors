import React, { useState } from 'react';
import CancelButton from './CancelButton';

const AuthorForm = (props) => {
    const {initialName, onSubmitProp, buttonValue, errors} = props;
    const [name, setName] = useState(initialName);
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
    }
    return (
        <form onSubmit={onSubmitHandler} className="mx-auto col-md-6">
            { errors.map((err,index) => <p key={index} className="text-danger">{err}</p>) }
            <div className="form-group">
                <label>Name: </label>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className="form-control mb-2" />
            </div>
            <CancelButton />
            <input type="submit" value={buttonValue} className="btn btn-outline-primary align-self-end" />
        </form>
    )
}

export default AuthorForm;