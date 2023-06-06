import React, { useState } from 'react';


import { useNavigate } from 'react-router';
import './Home.css';

const Home = () => {

  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value);
  // };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation
    if (email === '') {
      alert('Please enter your username.');
    } else if (password === '') {
      alert('Please enter your password.');
    } else {
      // Perform login logic here
      setError('');
      alert('Login successful!');
      nav("/user")
    }
  };

  return (
  <div className="login-page">
    <div className='form'>
      <h1>Login</h1>
      <form className='login-form' onSubmit={handleSubmit}>
        <div>
          {/* <label>Username:</label> */}
          {/* <input
            type="text"
            placeholder='Enter User Name'
            value={username}
            onChange={handleUsernameChange}
          /> */}
          <input type="email" placeholder="example@gmail.com" value={email}
                        onChange={e => {
                            setEmail(e.target.value)
                         }} />
        </div>
        <br/>
        <div>
          {/* <label>Password:</label> */}
          <input
            type="password"
            placeholder='Enter Password'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <br/>
        <div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
      </form>
    </div>
   </div>
   
  );
};

export default Home;