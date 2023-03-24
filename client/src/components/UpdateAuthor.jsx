import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useNavigate, Link} from 'react-router-dom';
import AuthorForm from './AuthorForm';

const UpdateAuthor = (props) => {
    const {id} = useParams();
    const [author, setAuthor] = useState({});
    const[loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    useEffect( () => {
        axios.get('http://localhost:8000/api/authors/'+id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    },[]);
    const updateAuthor = authorParam => {
        axios.put('http://localhost:8000/api/authors/'+id, authorParam)
            .then(res => {
                console.log(res);
                navigate('/authors');
            })
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
        <div className="mx-auto col-md-6">
            <h4>Favorite Authors</h4>
            <h5>Edit Author</h5>
            {
                loaded && <AuthorForm onSubmitProp={updateAuthor} initialName={author.name} buttonValue="Update Author!" errors={errors}/>
            }
        </div>
    )
}
export default UpdateAuthor;