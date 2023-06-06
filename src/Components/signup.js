import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import { useNavigate } from 'react-router';
import './Home.css';

const Reg = () => {

  const nav = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submitHandle = (event) => {
    event.preventDefault();

    // Perform validation
    if (email === '') {
      alert('Please enter your username.');
    } else if (password === '') {
      alert('Please enter your password.');
    } else {
      // Perform login logic here
      setError('');
      alert('Register successful!');
      nav("/")
    }
  };

  return (
  <div className="login-page">
    <div className='form'>
      <form className='login-form'>
        <h3>Login</h3>

        <input type="text" placeholder="example@gmail.com" value={name}
                        onChange={e => {
                            setName(e.target.value)

                        }} />
          <input type="email" placeholder="example@gmail.com" value={email}
                        onChange={e => {
                            setEmail(e.target.value)
                            if (e.target.value === '' || !e.target.value.includes('@gmail.com')) {

                              e.target.style.border = "2px solid red"
                          }
                          else {
                              e.target.style.border = "2px solid green"
                               }
                         }} />
       
        
          <input type="password" placeholder="Length is more than 5" onChange={e => {
                        setPassword(e.target.value)

                        if (e.target.value === '' || e.target.value.length < 6) {

                            e.target.style.border = "2px solid red"
                        }
                        else {
                            e.target.style.border = "2px solid green"
                        }

                    }} />
                    <div className="">

{email === '' || password === '' ?
    <button className="input-submit" disabled style={{ cursor: "not-allowed" }}>register</button>
    :
    <button className="input-submit" onClick={submitHandle}>Login</button>}
</div>
    <p className="message"style={{ color: "White" }}>Already registered? <Link to="/" style={{ color: "White",fontWeight: "bold" }}>Login</Link></p>
      </form>
    </div>
   </div>
   
  );
};

export default Reg;