import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftNav = () => {
  const [catagories,setCatagories] = useState([])
    useEffect(()=>{
         fetch('http://localhost:5000/catagories')
         .then(res=>res.json())
         .then(data=>setCatagories(data))
         .catch(error=>console.log(error))
    },[])
    
    return (
        <div>
           <h2>All catagories</h2>
         <div className="">
         {
        catagories.map(category => <p 
         key={category}
        >
          <Link className="text-decoration-none" to={`/category/${category.id}`}>{category.name}</Link>
        </p>) 
            }
         </div>
        </div>
    );
};

export default LeftNav;