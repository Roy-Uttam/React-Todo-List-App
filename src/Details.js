import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import logo from './logo.svg';
import './App.css';
import { useHistory } from "react-router-dom";

const Details = () => {

    const { id } = useParams();
    const { data, isPanding ,error} = useFetch('http://localhost:8000/products/' + id)
    const history = useHistory();
    const handleClick = () => {
        fetch('http://localhost:8000/products/' + data.id, {
          method: 'DELETE'
        }).then(() => {
          history.push('/');
        }) 
      }
    
    return ( 
        <div className="blog-details">

        {error && <div> {error} </div>}
        {isPanding && <div><img src={logo} className="App-logo" alt="logo" /> </div>}
        {data && (<article>
            <h1>Details-- {id}</h1>
            <h2>{ data.title}</h2>
            <p>{ data.description}</p>
            <img className="img" src={data.image} alt=""/>
            <button onClick={handleClick}>delete</button>
        </article>)}
            
        </div>
     );
}
 
export default Details;