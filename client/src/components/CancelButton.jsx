import React from 'react';
import {useNavigate} from 'react-router-dom';

const CancelButton = (props) => {
    const navigate = useNavigate();
    return (
        <button onClick={()=>{navigate('/authors')}} className="btn btn-outline-warning">Cancel</button>
    )
}

export default CancelButton;