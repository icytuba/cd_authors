import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import CreateAuthor from './components/CreateAuthor';
import UpdateAuthor from './components/UpdateAuthor';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/authors" element={<Dashboard />} />
          <Route path="/authors/create" element={<CreateAuthor />} />
          <Route path="/authors/edit/:id" element={<UpdateAuthor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
