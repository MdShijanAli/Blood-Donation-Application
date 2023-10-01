import { RouterProvider } from "react-router-dom"
import { routes } from './Routes/routes';
import { Toaster } from "react-hot-toast";


function App() {


  return (
    <>
     <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>

    </>
  )
}

export default App
