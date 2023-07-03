import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, name, body } = post;
    const navigate = useNavigate();

    const handlePostDetails = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>Details: {body}</p>
            <button onClick={handlePostDetails}>See details</button>
        </div>
    );
};

export default Post;