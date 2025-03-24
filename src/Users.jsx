import React, { use } from 'react';

const Users = ({ fetchUsers }) => {
    const users = use(fetchUsers)
    console.log(users);
    return (
        <div>
            <h2>Users :{users.length} </h2>
        </div>
    );
};

export default Users;