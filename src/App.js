import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import Home from './Components/Home';
import WelcomePage from './Components/Welcome';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/registration" element={<RegisterForm/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/welcome" element={<WelcomePage/>}/>
    </Routes>
  );
}

export default App;
