
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Registration = () => {
    const user = <FontAwesomeIcon icon={faEnvelope} />;
    const lock = <FontAwesomeIcon icon={faKey} />;
    const { error, handleEmail, handlePassword, handleRegisterBtn } = useAuth();
    return (
        <div className="container login-wrap my-5">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h3>Sign Up</h3>

                    </div>
                    <div className="card-body">
                        <form onSubmit={handleRegisterBtn}>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">{user}</span>
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
                                <br />
                                <p className="text-info">{error}</p>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Sign Up" className="btn float-right login_btn" />
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                            Already Have Account? <Link to="/login">Sign In</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;