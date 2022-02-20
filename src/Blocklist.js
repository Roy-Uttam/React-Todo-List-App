const Bloglist = ({blog , title }) => {
   
    return (

        <div className="bloglist">
            <h1>{title}</h1>
            {blog.map((blog)=>(
                
                <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <p>Owner by: {blog.owner}</p>
                </div>

            ))}
        </div>
     );
}
 
export default Bloglist;