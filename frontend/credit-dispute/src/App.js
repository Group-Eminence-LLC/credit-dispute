

import Login from './components/auth/LoginForm';
import Signup from './components/auth/LoginForm/Signup';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login  
/>} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
);




}

export default App;
