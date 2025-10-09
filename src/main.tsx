import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/custom.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout.tsx'
import Dashboard from './components/pages/Dashboard.tsx'
import Products from './components/pages/Products.tsx'
import ManagePosts from './components/pages/posts/ManagePosts.tsx'
import CreatePost from './components/pages/posts/CreatePost.tsx'
import DetailsPost from './components/pages/posts/DetailsPost.tsx'
import EditPost from './components/pages/posts/EditPost.tsx'
import ManageRoles from './components/pages/roles/ManageRoles.tsx'
import CreateRole from './components/pages/roles/CreateRole.tsx'
import ManageUsers from './components/pages/users/ManageUsers.tsx'
import CreateUser from './components/pages/users/CreateUser.tsx'
import EditRole from './components/pages/roles/EditRole.tsx'
import ManageCustomer from './components/pages/customers/ManageCustomer.tsx'
import EditCustomer from './components/pages/customers/EditCustomer.tsx'
import CreateCustomer from './components/pages/customers/CreateCustomer.tsx'
import DetailsCustomer from './components/pages/customers/DetailsCustomer.tsx'
import Login from './components/pages/Login.tsx'

const links = createBrowserRouter([
  {path: '/', element: <Layout />,
    children: [
      {index: true, element: <Dashboard />},
      // {path: '/', element: <Dashboard />},
      {path: '/dashboard', element: <Dashboard />},
      {path: '/products', element: <Products />},
      {path: '/sales', element: <h1>Sales</h1>},
      {path: '/users', element: <ManageUsers />},
      {path: '/create-user', element: <CreateUser/>},
      {path: '/posts', element: <ManagePosts/>},
      {path: '/post/create', element: <CreatePost/>},
      {path: '/post/details/:id', element: <DetailsPost/>},
      {path: '/post/edit/:id', element: <EditPost/>},
      {path: '/roles', element: <ManageRoles/>},
      {path: '/create-role', element: <CreateRole/>},
      {path: '/update-role/:id', element: <EditRole/>},

      // Customers Route
      {path: '/customers', element: <ManageCustomer/>},
      {path: '/create-customer', element: <CreateCustomer/>},
      {path: '/customer/edit/:id', element: <EditCustomer/>},
      {path: '/customer/details/:id', element: <DetailsCustomer/>},
    ]
  },
  {path: '/pos', element: <h1>POS</h1>},
  {path: '/login', element: <Login />},
  {path: '*', element: <h1 className='text-danger text-center my-5'>404 Page not found</h1>},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={links} />
  </StrictMode>,
)
