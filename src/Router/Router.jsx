import App from "../App";
import AddNewBooking from "../Pages/AddNewBooking/AddNewBooking";
import Booking from "../Pages/Booking/Booking";
import Error from "../Pages/Error404/Error";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/booking',
        element: <Booking />
      },
      {
        path: '/addNewBooking',
        element: <AddNewBooking />
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ]
  }
])

export default router;