import { useState ,useEffect} from "react";
import Bloglist from "./Blocklist";

const Home = () => {

    // const[name, setName] = useState('uttam');
    // const[age, setAge] = useState('30');
   
    
    // const handleclick =()=>{
    //     setName('Roy');
    //     setAge(25);
    // }
    const[number, ran] = useState('11');
    const setnum =()=>{
        ran(Math.random);
    }

    const [blogs, setBlogs] = useState(
      [
        {title : 'hooks', owner: 'Roy', body:'useState, eseEffect' ,id:1},
        {title : 'React', owner: 'uttam', body:'components templates' ,id:2},
        {title : 'event', owner: 'tom', body:'click-event title body' ,id:3},
        {title : 'Pros', owner: 'cruise', body:'functions & pros' ,id:4},
      ])

      const Delete = (id) =>{

        const newBlog = blogs.filter(blog=> blog.id !== id);
        setBlogs(newBlog);
            }

            useEffect(() => {
              console.log('hello use-effect')
              
            })
    return (
      <div className="home">
       <Bloglist blog = {blogs} title = "All TOdo" Delete = {Delete}/>
       <Bloglist blog = {blogs.filter((blog)=> blog.owner === 'Roy')} Delete = {Delete} title = 'Only Roys Blogs'/>
      
      <h1>Random Number : {number}</h1>
      <button onClick={setnum}>clcik here</button>
      </div>
      
       
      
    );
  }
   
  export default Home;