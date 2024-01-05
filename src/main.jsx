import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/layouts/Shop.jsx';
import About from './components/layouts/About.jsx';
import Contact from './components/layouts/Contact.jsx';
import Journal from './components/layouts/Journal.jsx';
import SingUp from './components/layouts/singUp.jsx';
import SingIn from './components/layouts/SingIn.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shop",
    element: <Shop/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/journal",
    element: <Journal/>,
  },
  {
    path: "/singup",
    element: <SingUp/>,
  },
  {
    path: "/singin",
    element: <SingIn/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    

    <RouterProvider router={router} />
  </React.StrictMode>,
)
