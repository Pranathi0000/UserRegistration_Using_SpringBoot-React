import React, { useState } from 'react';
import axios from 'axios';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './Styles.css';

const LoginForm = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', {
        email,
        password,
      });
      console.log(response.data); // Handle success, perhaps set authentication token in local storage
      if(response.data==='Login success')
      {
        toast.success('Login successful!', {
          position: toast.POSITION.TOP_CENTER,
        });
       navigate('/welcome');
      }
      else if(response.data==='Login failed')
      {
        toast.error('Login failed try again!',{
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.error('Login error:', error); // Handle error, display error message
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      
    </form>
  );
};

export default LoginForm;
