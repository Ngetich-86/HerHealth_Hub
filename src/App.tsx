
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Homepage from "./pages/Homepage";
// import AboutPage from "./pages/AboutPage";
// import Contact from "./pages/Contact";
// import Community from './pages/Community';
// import Blogs from './pages/Blogs';
// import Events from './pages/Events';

// const App = () => {
//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Homepage />,
//       // errorElement: <Error />
//     },
//     {
//       path: 'about-us',
//       element: <AboutPage />,
//       // errorElement: <Error />
//     },
//     {
//       path: 'community',
//       element: <Community />,
//       // errorElement: <Error />
//     },
//     {
//       path: 'contact-us',
//       element: <Contact/>,
//       // errorElement: <Error />
//     },
//     {
//       path: 'blogs',
//       element: <Blogs/>,
//       // errorElement: <Error />
//     },
//     {
//       path: 'events',
//       element: <Events/>,
//       // errorElement: <Error />
//     },
//   ])
//   return <RouterProvider router={router} />
// }

// export default App

import { BrowserRouter,Route,Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import AboutPage from "./pages/AboutPage"
import Community from "./pages/Community"
import Blogs from "./pages/Blogs"
import Events from "./pages/Events"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/about-us" element={<AboutPage/>} />
    <Route path="/community" element={<Community/>} />
    <Route path="/blogs" element={<Blogs/>} />
    <Route path="/events" element={<Events/>} />
    <Route path="/contact-us" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App