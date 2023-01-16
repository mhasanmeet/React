import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/layout/Navbar"; 
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";

function App() {

  const Layout = () => {
    return(
      <div>
        <Navbar/>
        <Outlet/>
      </div>
    )
  }

  //Route Paths
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Dashboard/>
        },
        {
          path: "/project/:id",
          element: <ProjectDetails/>
        }
      ]
    },

  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
