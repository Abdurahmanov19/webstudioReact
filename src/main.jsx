import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/ROUTER/Layout";
import Studio from "./pages/STUDIO/Studio";
import Portfolio from "./pages/PORTFOILO/Portfolio";
import Contact from "./pages/Contact";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route
                      path='/'
                      element={<Studio/>}
                  />

                  <Route
                      path='/portfoilo'
                      element={<Portfolio/>}
                  />

                  <Route
                      path='/contact'
                      element={<Contact/>}
                  />
              </Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
);
