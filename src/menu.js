import logo from './image/mylogo.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/nav.css';
import './style/common.css';
import icon1 from './image/facebook-16.png';
import icon2 from './image/insta.png';
import icon3 from './image/twit.png';
import { createUser, authenticateUser } from './api'; 

function Nav() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const onMouseEnter = (e) => {
        e.target.style.color = '#C0AF84';
    };

    const onMouseLeave = (e) => {
        e.target.style.color = 'whitesmoke';
    };

    const handleSignIn = () => {
        setIsSignInOpen(true);
    };

    const handleSignOut = () => {
        setIsAuthenticated(false);
    };

    const handleSignUp = () => {
        setIsSignUpOpen(true);
    };

    const handleSignInSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await authenticateUser(email, password);
            setIsAuthenticated(true);
            setIsSignInOpen(false);
            alert(`Welcome back, ${user.name}!`);
        } catch (error) {
            alert(error.message);
        }
    };

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        try {
            const newUser = { name, email, password };
            await createUser(newUser);
            setIsSignUpOpen(false);
            alert('Registration successful!');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header_row">
                        <div className="logo">
                            <img src={logo} alt="Logo" />
                        </div>
                        <nav className="header_nav">
                            <ul>
                                <li>
                                    <Link to="/AboutUs" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/BooksOfMonth" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                        Books of the month
                                    </Link>
                                </li>
                                <li>
                                    <a href="#!" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                        Our bookshop
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                        Feedback
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                        Contact us
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="icons">
                            <ul>
                                <li>
                                    <a href="#!"><img src={icon1} alt="Icon 1" /></a>
                                </li>
                                <li>
                                    <a href="#!"><img src={icon2} alt="Icon 2" /></a>
                                </li>
                                <li>
                                    <a href="#!"><img src={icon3} alt="Icon 3" /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="auth-buttons">
                            {isAuthenticated ? (
                                <>
                                    <Link to="/profile" className="profile-button">Profile</Link>
                                    <button onClick={handleSignOut} className="sign-out-button">Sign Out</button>
                                </>
                            ) : (
                                <>
                                    <button onClick={handleSignIn} className="sign-in-button">Sign In</button>
                                    <button onClick={handleSignUp} className="sign-up-button">Sign Up</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {isSignInOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Welcome Back</h2>
                        <form onSubmit={handleSignInSubmit}>
                            <label>Email:</label>
                            <input 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                            <label>Password:</label>
                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                            <button type="submit">Sign In</button>
                            <button type="button" onClick={() => setIsSignInOpen(false)}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}

            
            {isSignUpOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Sign Up</h2>
                        <form onSubmit={handleSignUpSubmit}>
                            <label>Name:</label>
                            <input 
                                type="text" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                            <label>Email:</label>
                            <input 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                            <label>Password:</label>
                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                            <button type="submit">Sign Up</button>
                            <button type="button" onClick={() => setIsSignUpOpen(false)}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Nav;
