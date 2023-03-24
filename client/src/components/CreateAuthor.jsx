import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import AuthorForm from './AuthorForm';

const CreateAuthor = (props) => {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const createAuthor = authorParam => {
        axios.post('http://localhost:8000/api/authors', authorParam)
            .then(res => {
                console.log(res)
                navigate('/authors')
            })
            // .catch(err => setErrors(err.response.data.errors))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }
    return (
        <div className='mx-auto col-md-6'>
            <h4>Favorite Authors</h4>
            <h5>Add A New Author!</h5>
            <AuthorForm initialName="" onSubmitProp={createAuthor} buttonValue="Add Author" errors={errors} />
        </div>
    )
}

export default CreateAuthor;