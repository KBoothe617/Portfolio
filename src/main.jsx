import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import './App.css';
import App from './App.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Portfolio from './pages/Portfolio.jsx';

// Create a router with the App component as the root element linking to the AboutMe, Portfolio, Contact, and Resume components
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'resume',
        element: <Resume />
      }
    ]
  }
]);

// Render the router to the root element in the HTML file
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);