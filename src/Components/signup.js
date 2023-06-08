import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";


import { useNavigate } from 'react-router';
import './Home.css';

const Reg = () => {

  const nav = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  const submitHandle = async (event) => {
    event.preventDefault();

    const empData = { name, email, password };
    await axios.post("http://localhost:8080/register", empData);
      // Perform login logic here
      // setError('');
     
      alert('Register successful!');
      nav("/")
    
  };

  return (
  <div className="login-page">
    <div className='form'>
      <form className='login-form'>
        <h3>Register</h3>
        {/* <label className="lable">User Name :</label> */}
        User Name : <input type="text" placeholder="Enter your name" value={name}
                        onChange={e => {
                            setName(e.target.value)

                        }} />
<label className="lable">Email :</label>
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
       <label className="lable">Password :</label>
        
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
    <button className="input-submit" onClick={submitHandle}>register</button>}
</div>
    <p className="message"style={{ color: "White" }}>Already registered? <Link to="/" style={{ color: "White",fontWeight: "bold" }}>Login</Link></p>
      </form>
    </div>
   </div>
   
  );
};

export default Reg;