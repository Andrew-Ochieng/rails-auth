import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/footer';
import Login from './components/login';
import Navbar from './components/navbar';
import Signup from './components/signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Signup /> } />
          <Route path='/signup' element={ <Signup /> } />
          <Route path='/login' element={ <Login /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
