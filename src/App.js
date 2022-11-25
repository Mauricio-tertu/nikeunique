import { createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Admin from './Pages/Admin'
import Error from './Pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },

  {
    path: '/Login',
    element: <Login/>
  },

  {
    path: '/Admin',
    element: <Admin/>
  },

  {
    path: '*',
    element: <Error/>
  },
])

export { router };