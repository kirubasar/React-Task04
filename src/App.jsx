import { RouterProvider, createBrowserRouter } from "react-router-dom";
import All from "./pages/All";
import "./App.css";
import Home from "./pages/Home";
import Career from "./pages/Career";
import CyberSecurity from "./pages/CyberSecurity";
import DataScience from "./pages/DataScience";
import FullStack from "./pages/FullStack";

const router = createBrowserRouter([
{
  path:"/",
  element: <Home />,
  children: [
    { path:"all",
    element:<All/>
  },
  {
    path:'fullstack',
    element:<FullStack/>
  },
  {
    path:'datascience',
    element:<DataScience/>
  },
  {
    path:'cybersecurity',
    element:<CyberSecurity/>
  },
  {
    path:'career',
    element:<Career/>
  }
 ]
}
])

const App = () => {
  return (
   <RouterProvider router ={router}/>
  )
}

export default App;