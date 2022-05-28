import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
