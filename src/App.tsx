import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/index'; 
import CreatePage from './pages/create'; 
import Sidebar
 from './components/sideBar';
const App: React.FC = () => {
  return (
    <Router>
        < Sidebar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Router>
  );
};

export default App;
