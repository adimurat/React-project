import React, { useState } from "react";
import '../pages/section1.css';
import { Button } from "antd";
import bookImage from '../image/book.png';
import { authenticateUser, createUser } from '../api'; 
import { useNavigate } from 'react-router-dom';
import Nav from '../menu';

function Section1() {
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const Enter = (e) => {
        e.target.style.backgroundColor = 'black';
        e.target.style.color = 'white';
    };

    const Leave = (e) => {
        e.target.style.backgroundColor = '#C0AF84';
        e.target.style.border = 'none';
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const user = await authenticateUser(email, password);
            localStorage.setItem('currentUser', JSON.stringify(user));
            alert(`Welcome back, ${user.name}!`);
            navigate('/profile');
        } catch (error) {
            setError(error.message);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        const newUser = { name, email, password };
        try {
            await createUser(newUser);
            alert('Registration successful!');
            setIsSignUpOpen(false);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <div className="container" style={{ height: '100vh' }}>
                <Nav className="NavBar"/>
                <div className="section_info">
                    <div>
                        <img src={bookImage} className="section-img" alt="Book" />
                    </div>
                    <div className="content__info">
                        <h1>About Bookshelf</h1>
                        <p className="color">We make books great again. Just kidding, books were always great!</p>
                        <p className="sub_info">Every month, we send our subscribers a box with the five best books of the month. These are bestsellers and classic books that deserve to be read and placed on your bookshelf. We select books according to the preferences of our customers. In addition, you can always attend our events, join the book club or just visit our offline store in Almaty.</p>
                        {error && <p className="error">{error}</p>}
                        <span className="buttons">
                            <Button type="primary" className="btnLog" onMouseEnter={Enter} onMouseLeave={Leave} onClick={() => setIsSignInOpen(true)}>Login</Button>
                            <Button className="btnSign" onMouseEnter={Enter} onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'white';
                                e.target.style.color = 'black';
                            }} onClick={() => setIsSignUpOpen(true)}>Sign up</Button>
                        </span>
                    </div>
                </div>
            </div>
            {isSignInOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Sign In</h2>
                        <form onSubmit={handleSignIn}>
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
                        <form onSubmit={handleSignUp}>
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

export default Section1;
