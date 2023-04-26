import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";


const Category = () => {
    let {id} = useParams()
    const catagories = useLoaderData()
    return (
        <div>
           {id && <h2>This is category: {catagories.length}</h2>}
           {
            catagories.map(news => <NewsCard
            key={news._id} news={news}
            ></NewsCard>)
           }
        </div>
    );
};

export default Category;