import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    // console.log(friend);
    return (
        <div>
            <h2>Friend name: {friend.name}</h2>
            <h4>Email address: {friend.email}</h4>
            <p>Call him / her: {friend.phone}</p>
            <p>Visit website: {friend.website}</p>
            <p>Address street: {friend.address.street}, suite: {friend.address.suite}</p>
            <p>zipcode: {friend.address.zipcode}, city: {friend.address.city}</p>
            <p>Company: {friend.company.name}</p>
        </div>
    );
};

export default FriendDetails;