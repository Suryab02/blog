import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Changed BrowserRouter to Router
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import ViewPost from './pages/ViewPost';
import Chat from './pages/Chat';
import NewPage from './pages/NewPage'; 
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
   <Router>
      <Header />
      <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/edit-post/:id" element={<EditPost />} />
          <Route path="/view-post/:id" element={<ViewPost />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/new-page" element={<NewPage />} />
      </Routes> 
      <Footer />
    </Router>
  );
}

export default App;
