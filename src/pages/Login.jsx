// React
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Firebase
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (err) {
            setErr(true);
        }
    };

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Lama Chat</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button>Sign in</button>
                </form>
                <p>
                    You don't have an account?{' '}
                    <Link to="/register" className="link">
                        Register
                    </Link>
                </p>
                {err && <span>Something went wrong!</span>}
            </div>
        </div>
    );
};

export default Login;
