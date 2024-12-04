import React from 'react';
import { Modal } from 'react-bootstrap';

const LoginModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} centered className="modal-sm">
            <Modal.Body className="nt-page p-0">
                <div className="nt-auth-wrap d-flex align-items-center justify-content-center m-0">
                    <div className="nt-auth-area">
                        <header className="text-center nt-form-header">
                            <h3 className="text-white">Login</h3>
                            <button type="button" className="close" onClick={handleClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </header>

                        <article className="nt-form-body mt-4 px-4">
                            <form id="login-modal">
                                <div className="alert alert-danger error-validation-main main_err"></div>
                                <div className="form-group has-icon">
                                    <span className="icon-box icon-left">
                                        <img width="24" height="24" src="public/img/icon/email.svg" alt="Email" />
                                    </span>
                                    <input type="email" className="form-control" placeholder="Email" name="username" />
                                    <div className="error-validation username_err"></div>
                                </div>
                                <div className="form-group has-icon">
                                    <span className="icon-box icon-left">
                                        <img width="24" height="24" src="public/img/icon/password.svg" alt="Password" />
                                    </span>
                                    <input type="password" className="form-control" placeholder="Password" name="password" />
                                    <div className="error-validation password_err"></div>
                                </div>
                                <div className="form-group text-center mb-3">
                                    <div className="g-recaptcha" data-sitekey="6LeXK9IaAAAAAH5rFqpctd95ZgW_f8PThP0GgF9R"></div>
                                    <div className="error-validation captcha_err"></div>
                                </div>
                                <div className="form-group text-right mb-3">
                                    <a href="reset-password/send-link-password.html" className="meta-link">Forgot Password or Username?</a>
                                </div>
                                <div className="form-group mt-3 pt-3">
                                    <button className="btn btn-primary w-100" type="submit" id="login-modal-submit">Login</button>
                                </ div>
                                <div className="form-group">
                                    <button className="btn btn-primary w-100 back-to-social">Back</button>
                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default LoginModal;