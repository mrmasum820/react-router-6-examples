import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();

    return (
        <div>
            <h3>This is post details page</h3>
            <h4>Id: {post.id}</h4>
            <p>{post.name}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;