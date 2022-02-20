import { useState ,useEffect} from "react";
import Bloglist from "./Blocklist";
import logo from './logo.svg';
import './App.css';
import useFetch from "./useFetch";
import Customdata from "./Customdata";
import Galaryapp from "./Customdata2";

const Home1 = () => {


  const { data, isPanding ,error} = useFetch('http://localhost:8000/products')
  // const { data, isPanding ,error} = useFetch('https://jsonplaceholder.typicode.com/todos')
            
    return (
      <div className="home">
       {error && <div> {error} </div>}
       {isPanding && <div><img src={logo} className="App-logo" alt="logo" /> </div>}
       {/* {blogs && <Bloglist blog = {blogs} title = "All TOdo"/>} */}
       {data && <Customdata data = {data} title = "All custom api data"/>}
       {/* {data && <Galaryapp data = {data} title = "All custom api data"/>} */}
       
      </div>
      
    );
  }
   
  export default Home1;