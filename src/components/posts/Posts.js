import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../post/Post';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>This is posts page: {posts.length}</h2>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;