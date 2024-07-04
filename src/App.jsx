import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Card from './components/Cards';
import Separator from './components/Separator';
import placesDesc from './placesDesc.jsx';
import Footer from './components/Footer.jsx';
import Destination from './components/Destination';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import axios from 'axios';
import {Toaster} from 'react-hot-toast';
import { UserContextProvider } from '../context/userContext.jsx';
import './App.css';

axios.defaults.baseURL = 'http:localhost:8000';
axios.defaults.withCredentials = true

const Home = () => (
  <>
    <Background />
    <Separator />
    <Card places={placesDesc} />
    {/* <Card places={placesDesc.slice(3, 6)} /> */}
  </>
);

function App() {
  return (
    <UserContextProvider>
    <Router>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{duration:3000}}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination/:name" element={<Destination />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer />
    </Router>
    </UserContextProvider>
  );
}

export default App;
