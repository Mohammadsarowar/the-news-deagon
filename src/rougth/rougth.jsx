import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../component/Main";
import Home from "../component/pages/Home";
import Category from "../component/category";
import NewsLayout from "../component/newslayout/newsLayout";
import LoginLayout from "../component/newslayout/LoginLayout";
import Register from "../component/pages/Register";
import Login from "../component/pages/Login";
import PrivateRouter from "../Provider/PrivateRouter";
import News from "../component/pages/News";
import Terms from "../component/Sheard/Terms";

const router = createBrowserRouter([
  {
     path:'/',
     element:<LoginLayout/>,
     children:[
      {
        path:'/',
        element:<Navigate to="/category/0"></Navigate>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:'/terms',
        element:<Terms/>
      }
     ]
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      // {
      //   path: "/",
      //   element: <Category/>,
      //   loader:()=>fetch('http://localhost:5000/news')
      // },
      {
        path: ":id",
        element: <Category />,
        loader: ({ params }) => fetch(`http://localhost:5000/catagories/${params.id}`),
      },
     
    ],
  },
  {
    path: "/news/:_id",
    element: <PrivateRouter><NewsLayout /></PrivateRouter>,
    // children:[
    //     {
    //         path:':id',
    //         element:<News/>

    //     }
    // ]
  },
]);
export default router;
