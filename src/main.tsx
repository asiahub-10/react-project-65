import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/custom.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout.tsx'
import Navbar from './components/layout/Navbar.tsx'
import Dashboard from './components/pages/Dashboard.tsx'

const links = createBrowserRouter([
  {path: '/', element: <Layout />,
    children: [
      {index: true, element: <Dashboard />},
      // {path: '/', element: <Dashboard />},
      {path: '/dashboard', element: <Dashboard />},
      {path: '/products', element: <h1>Products List</h1>},
    ]
  },
  {path: '/login', element: <h1>login</h1>},
  {path: '*', element: <h1 className='text-danger text-center my-5'>404 Page not found</h1>},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={links} />
  </StrictMode>,
)
