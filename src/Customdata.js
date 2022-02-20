import { Link } from 'react-router-dom';

const Customdata = ({data , title }) => {
   
    return (

        <div className="bloglist">
            <h1>{title}</h1>
            {data.map((data)=>(
                
                <div className="blog-preview" key={data.id}>
                <Link to={`/product/${data.id}`}>
                <h2>{data.title}</h2>
                <h3>{data.category}</h3>
                <img className="img1" src={data.image} alt=""/>
                </Link>
                
                </div>

            ))}
        </div>
     );
}
 
export default Customdata;