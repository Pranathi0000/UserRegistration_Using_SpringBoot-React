import React, { useState } from 'react';
import axios from 'axios';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './Styles.css';

const RegisterForm = () => {
  const navigate=useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/register', {
        name,
        email,
        password,
      });
      console.log(response.data); // Handle success, perhaps set a success message or redirect
      if(response.data==='Registration completed')
      {
        toast.success('Registration successful!', {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate("/login");
      }
      else
      {
        toast.error('Registration failed!', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.error('Registration error:', error); // Handle error, display error message
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
