import { createBrowserRouter } from "react-router-dom";


import Home from './routes/Home';
import Registros from "./routes/Registros";
import Error from './routes/Error';




 
const router =  createBrowserRouter([
  {path:"/", element:<Home /> },
  {path:'/registros', element: <Registros/>},
  {path:"*", element: <Error /> }
])

export {router}