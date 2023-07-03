import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../friend/Friend';

const Friends = () => {
    const friends = useLoaderData();

    return (
        <div>
            <h2>I have {friends.length} friends. YAY</h2>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;