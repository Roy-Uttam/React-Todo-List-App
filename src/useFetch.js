import { useState ,useEffect} from "react";
 
const useFetch = (URL) =>{

    const [data, setData] = useState(null)
    const [isPanding, setpending] = useState(true);
    const [error , setError] = useState(null);
     
    
    useEffect(() => {

      const abortCont = new AbortController();

        setTimeout(()=>{

        fetch(URL, {signal: abortCont.signal})
        .then(response => {
          if(!response.ok){
           throw Error("could to fetch data from this resourse")
          }
         return response.json()
        })
        .then(data=>{
          // console.log(data);
          setData(data);
          setpending(false);
          setError(null);

        })
        .catch(err=> {
          if(err.name === 'AbortError'){
            console.log('fetch aborted')
          }else{
            setpending(false);
            setError(err.message)
          }
        
        })
      }, 500)

              
      return () => abortCont.abort();
      }, [URL]);
      
      return {data , error , isPanding}

}

export default useFetch;
