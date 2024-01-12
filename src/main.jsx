import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


import Shop from './components/layouts/Shop.jsx';
import About from './components/layouts/About.jsx';
import Contact from './components/layouts/Contact.jsx';
import Journal from './components/layouts/Journal.jsx';
import SingUp from './components/layouts/singUp.jsx';
import SingIn from './components/layouts/SingIn.jsx';
import RootLayout from './components/RootLayout.jsx';
import Error from './components/layouts/Error.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='' element={<RootLayout/>}>
          <Route path='/' element={<App />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/journal' element={<Journal />}/>
          <Route path='/singUp' element={<SingUp />}/>
          <Route path='/singIn' element={<SingIn />}/>
          <Route path='/:id' element={<Error/>}/>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
