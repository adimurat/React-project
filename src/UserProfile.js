import React from 'react';

const UserProfile = ({ user }) => {
    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            {user ? (
                <>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </>
            ) : (
                <p>No user data available.</p>
            )}
        </div>
    );
};


export default UserProfile;
