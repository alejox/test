import { useRef } from 'react';
import Home from '../home/Home';
import './login.scss';

export default function Login() {
  const user = useRef();
  const password = useRef();
  const getUser = localStorage.getItem('userData');
  const getPassword = localStorage.getItem('passwordData');

  const handleSubmit = () => {
    if (user.current.value == 'JohnDoe' && password.current.value == '1234') {
      localStorage.setItem('userData', 'JohnDoe');
      localStorage.setItem('passwordData', '1234');
    }
  };

  return (
    <>
      {getUser && getPassword ? (
        <Home />
      ) : (
        <section className="login">
          <div className="login__blur"></div>
          <h1 className="login__title">Drummer School</h1>
          <article className="login__card">
            <h2 className="login__card-title">Login</h2>
            <p>
              <b>Username: </b>JohnDoe
            </p>
            <p>
              <b>password: </b>1234
            </p>
            <form onSubmit={handleSubmit} className="login__form">
              <label
                htmlFor="name"
                className="login__form-label"
                placeholder="Type your username"
              >
                Username
              </label>
              <input
                type="text"
                id="name"
                className="login__form-input"
                ref={user}
              />

              <label htmlFor="pass" className="login__form-label">
                Password
              </label>
              <input
                type="password"
                className="login__form-input"
                id="pass"
                ref={password}
              />
              <button className="login__form-button">LOGIN</button>
            </form>
            <a href="#" className="login__form-link">
              Forgot password
            </a>
          </article>
          <p className="login__text">
            New to Drummer School?
            <a className="login__link" href="#">
              Join now
            </a>
          </p>
        </section>
      )}
    </>
  );
}
