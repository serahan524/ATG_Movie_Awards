import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import UserMovieList from './pages/UserMovieList';
import Register from './pages/Register';


const App = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/user" element={ <UserMovieList />} />
        <Route path="/register" element={ <Register />} />
      </Routes>   
   </BrowserRouter>   
  );
}

export default App;
