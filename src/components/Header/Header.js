import React from 'react';
import { link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
         <link to='/'>
         <div className='logo'>Movie App</div>
            </link>
         <div className='user-image'>
            <img src={userImage} alt='user' />

        </div>
        </div>
    );
};

export default Header;