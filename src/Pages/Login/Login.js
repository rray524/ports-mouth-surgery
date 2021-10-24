import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';
import { useHistory, useLocation } from "react-router";

const Login = () => {
    const gPlus = <FontAwesomeIcon icon={faGoogle} />;
    const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} />;
    const lock = <FontAwesomeIcon icon={faKey} />;
    const { auth, email, password, handleGoogleSignIn, handleManualLogin, error, handleEmail, handlePassword, setError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    // google history
    const handleLogin = () => {
        handleGoogleSignIn()
            .then((result) => {
                history.push(redirect_uri);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    // password history
    const handleMainLogin = (e) => {
        e.preventDefault();
        handleManualLogin(email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                console.log(location.state?.from);
                history.push(redirect_uri);
                setError('');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });

    }
    return (
        <div className="container login-wrap my-5">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h3>Sign In</h3>
                        <button onClick={handleLogin} className="d-flex justify-content-end social_icon">
                            {gPlus}
                        </button>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">{envelopeIcon}</span>
                                </div>
                                <input type="email" onBlur={handleEmail} className="form-control" placeholder="email" required />

                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">{lock}</span>
                                </div>
                                <input type="password" onBlur={handlePassword} className="form-control" placeholder="password" required />
                            </div>
                            <div className="row align-items-center remember">
                                <input type="checkbox" />Remember Me
                                <p className="text-info">{error}</p>
                            </div>
                            <div className="form-group">
                                <button onClick={handleMainLogin} className="btn float-right login_btn">Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                            Don't have an account? <Link to="/registration">Sign Up</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;