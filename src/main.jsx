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
import SingIn from './components/layouts/SingIn.jsx';
import RootLayout from './components/RootLayout.jsx';
import Error from './components/layouts/Error.jsx';
import SingUp from './components/layouts/SingUp.jsx';
import store from './components/store.js'
import { Provider } from 'react-redux'
import Products from './components/layouts/Products.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='' element={<RootLayout/>}>
          <Route path='/' element={<App />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/journal' element={<Journal />}/>
          <Route path='/product' element={<Products/>}/>
          <Route path='/sing-up' element={<SingUp/>}/>
          <Route path='/singin' element={<SingIn />}/>
          <Route path='/:id' element={<Error/>}/>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </Provider>
  
)
