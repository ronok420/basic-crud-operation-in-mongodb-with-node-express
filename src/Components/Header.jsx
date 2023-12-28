import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
      
            <Link style={{margin:"20px"}} to="/login">login page</Link>
            <Link style={{margin:"20px"}} to="/user">User data</Link>

        </div>
    );
};

export default Header;