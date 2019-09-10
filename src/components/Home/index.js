import React from 'react';
import SignOutButton from '../Authentication/SignOut';
import { AuthUserContext } from '../Authentication/Session';

const HomePage = () => (
    <AuthUserContext.Consumer>
       { authUser => authUser ? 
        <div><SignOutButton /> <p>Home Page</p> </div>
        : 
        <p>Home Page</p>
       }  
    </AuthUserContext.Consumer>
);

export default HomePage;