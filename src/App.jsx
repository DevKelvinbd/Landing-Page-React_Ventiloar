import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Ventiloar from './Pages/Ventiloar/Ventiloar';
import VentiloarEn from './Pages/Ventiloar/VentiloarEn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Ventiloar />,
  },
  {
    path: '/en',
    element: <VentiloarEn />,
  }
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
});

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
