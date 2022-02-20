import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
  const [title, setTitle] = useState('');
  const [description, setBody] = useState('');
  const [price, setPrice] = useState('');
  const [isPending, setisPending] = useState(false);

  const history = useHistory();
  const handlesubmit = (e) =>{
    e.preventDefault();
    const product = {title , description , price};
    setisPending(true);
    fetch('http://localhost:8000/products',{
      method: 'POST',
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify(product)
    }).then(()=>{console.log('new product added');
      setisPending(false);
      history.push('/');

   });
  };

  return (
    <div className="create">
      <h2>Add a New</h2>
      <form onSubmit={handlesubmit}>
        <label>title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
         <label>price:</label>
        <input 
          type="text" 
          required 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        
        {!isPending && <button>Add Product</button>}
        {isPending && <button disabled>Adding product .....</button>}
      </form>
    </div>
  );
}
 
export default Create;