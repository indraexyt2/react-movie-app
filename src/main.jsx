import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './templates/mainLayout.jsx'
import { 
  Home,
  MovieDetail,
  Movies,
  TvShows
  } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/movies/:source',
        element: <Movies />
      },
      {
        path: '/movies/:source/:query',
        element: <Movies />
      },
      {
        path: '/movies',
        element: <Movies />
      },
      {
        path: '/tvshows',
        element: <TvShows />
      },
      {
        path: '/movie/:id',
        element: <MovieDetail />
      },
      {
        path: '/tv_show/:id',
        element: <MovieDetail />
      }
   ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
