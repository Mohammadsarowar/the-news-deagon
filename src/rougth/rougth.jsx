import { createBrowserRouter } from "react-router-dom";
import Main from "../component/Main";
import Home from "../component/pages/Home";
import Category from "../component/category";
import NewsLayout from "../component/newslayout/newsLayout";
import News from "../component/pages/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) => fetch(`http://localhost:5000/catagories/${params.id}`),
      },
     
    ],
  },
  {
    path: "/news/:_id",
    element: <NewsLayout />,
    children:[
        {
            path:':id',
            element:<News/>,
            loader:({params})=> fetch(`http://localhost:5000/news/${params.id}`)
        }
    ]
  },
]);
export default router;
