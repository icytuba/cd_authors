import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
    const {authorId, successCallback} = props;
    const onClickHandler = e => {
        axios.delete('http://localhost:8000/api/authors/'+authorId)
            .then(res => successCallback())
            .catch(err => console.log(err))
    }
    return (
        <button onClick={onClickHandler} className="btn btn-outline-danger">Delete</button>
    )
}
export default DeleteButton;