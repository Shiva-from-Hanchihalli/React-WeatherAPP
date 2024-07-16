import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formType, setFormType] = useState('login'); // 'login', 'forgot', 'register'
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email !== '' && password !== '') {
      navigate('/weather');
    } else {
      alert('Please enter both email and password.');
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
    setFormType('login');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert('Registration successful!');
    setFormType('login');
  };

  const togglePasswordVisibility = () => {
    const passwordField = document.getElementById('login-pass');
    const passwordToggleIcon = document.getElementById('login-eye');
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      passwordToggleIcon.className = 'ri-eye-line login__eye';
    } else {
      passwordField.type = 'password';
      passwordToggleIcon.className = 'ri-eye-off-line login__eye';
    }
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={formType === 'login' ? handleLogin : formType === 'forgot' ? handleForgotPassword : handleRegister}>
        <h1 className="login__title">{formType === 'login' ? 'Login' : formType === 'forgot' ? 'Forgot Password' : 'Register'}</h1>

        <div className="login__content">
          <div className="login__box">
            <i className="ri-user-3-line login__icon"></i>
            <div className="login__box-input">
              <input
                type="email"
                required
                className="login__input"
                id="login-email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="login-email" className="login__label">Email</label>
            </div>
          </div>
          {formType !== 'forgot' && (
            <div className="login__box">
              <i className="ri-lock-2-line login__icon"></i>
              <div className="login__box-input">
                <input
                  type="password"
                  required
                  className="login__input"
                  id="login-pass"
                  placeholder=" "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="login-pass" className="login__label">Password</label>
                {formType === 'login' && <i className="ri-eye-off-line login__eye" id="login-eye" onClick={togglePasswordVisibility}></i>}
              </div>
            </div>
          )}
        </div>

        {formType === 'login' && (
          <div className="login__check">
            <div className="login__check-group">
              {/* <input type="checkbox" className="login__check-input" id="login-check" /> */}
              {/* <label htmlFor="login-check" className="login__check-label">Remember me</label> */}
            </div>
            <a href="#" className="login__forgot" onClick={() => setFormType('forgot')}>Forgot Password?</a>
          </div>
        )}

        <button type="submit" className="login__button">{formType === 'login' ? 'Login' : formType === 'forgot' ? 'Submit' : 'Register'}</button>

        {formType === 'login' ? (
          <p className="login__register">
            Don't have an account? <a href="#" onClick={() => setFormType('register')}>Register</a>
          </p>
        ) : (
          <p className="login__register">
            <a href="#" onClick={() => setFormType('login')}>Back to Login</a>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
