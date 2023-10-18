import React from 'react';

import './App.css';
import Portfolio from './portfolio/portfolio';
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactForm from './contact/contact';
import Layout from './layout/layout';

function App() {
  return (
    <>

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Layout />} >

            <Route index element={<Portfolio />} />

            <Route path="/contact" element={<ContactForm />} />

          </Route>

      </Routes>

    </BrowserRouter >

  </>
  );
}

export default App;
