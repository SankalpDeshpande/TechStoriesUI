import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import UserContextProvider from './Contexts/UserContext';
import './App.css';

function App() {
  return (
    <div className='app'>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index path='/' element={<Login />} />
            <Route exact path='/home' element={<Home />} />
            <Route path='*' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
