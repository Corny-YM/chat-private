import React from 'react';

// Firebase
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

import userAvatar from '../assets/imgs/LacLacAvartar.jpg';

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Lama chat</span>
            <div className="user">
                <img src={userAvatar} alt="" />
                <span>Corny</span>
                <button onClick={() => signOut(auth)}>logout</button>
            </div>
        </div>
    );
};

export default Navbar;
