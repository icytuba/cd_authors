import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import AuthorForm from './AuthorForm';
import DeleteButton from './DeleteButton';

const Dashboard = (props) => {
    const [allAuthors, setAllAuthors] = useState([]);
    useEffect( () => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                const sortedAuthors = res.data.sort((a,b) => {
                    if (a.name < b.name) { return -1 }
                    else return 1});
                setAllAuthors(sortedAuthors)
            })
            .catch(err => console.log(err))
    }, []);
    const removeFromDom = authorId => {
        setAllAuthors(allAuthors.filter(author => author._id !== authorId))
    }
    return (
        <div className="mx-auto col-md-6">
            <h4>Favorite Authors</h4>
            <table className='table mx-auto text-start w-auto'>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allAuthors.map( (author) => {
                            return(
                                <tr key={author._id}>
                                    <td>{author.name}</td>
                                    <td>
                                        <Link to={`/authors/edit/${author._id}`} className="me-2">Edit</Link>
                                        <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to="/authors/create">Add New Author</Link>
        </div>
    )

}

export default Dashboard;