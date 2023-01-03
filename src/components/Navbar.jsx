import { useContext } from 'react';

// Firebase
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Navbar = () => {
    const { dispatch } = useContext(ChatContext);

    const handleLogout = () => {
        dispatch({ type: 'CHANGE_USER', payload: {} });
        signOut(auth);
    };

    const { currentUser } = useContext(AuthContext);
    return (
        <div className="navbar">
            <span className="logo">Lama chat</span>
            <div className="user">
                <img src={currentUser.photoURL} alt="" />
                <span>{currentUser.displayName}</span>
                <button onClick={handleLogout}>logout</button>
            </div>
        </div>
    );
};

export default Navbar;
