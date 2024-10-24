import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/frontend/home';
import About from './components/frontend/about';
import Services from './components/frontend/services';
import './assets/css/style.scss';
import Projects from './components/frontend/projects';
import Blogs from './components/frontend/blogs';
import ContactUs from './components/frontend/contactUs';
import Login from './components/backend/login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/backend/dashboard';
import RequireAuth from './components/common/RequireAuth';
import { default as ShowServices } from './components/backend/services/Show';
import { default as CreateService } from './components/backend/services/Create';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/admin/login' element={<Login />} />

          <Route path='/admin/dashboard' element={
            <RequireAuth>

              <Dashboard />

            </RequireAuth>
          } />

          <Route path='/admin/services' element={
            <RequireAuth>

              <ShowServices />

            </RequireAuth>
          } />

          <Route path='/admin/services/create' element={
            <RequireAuth>

              <CreateService />

            </RequireAuth>
          } />

        </Routes>
      </BrowserRouter>
      <ToastContainer
        position='top-center'
      />
    </>
  )
}

export default App