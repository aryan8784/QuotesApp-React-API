import { useEffect, useState } from "react";
import "./App.css";
import "./index.css"

function App() {

  const [quotes, setQuotes] = useState("");
  const [author, setAuthor] = useState("");


  useEffect(()=>{
    getAdvice()
  },[])



  async function getAdvice() {
    // const response = await fetch("	https://api.adviceslip.com/advice");
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json()
    // console.log(data.content);
    setQuotes(data.content)
    setAuthor(data.author)
  }

  return (
    <>
      <div className="body">
      <h1>Quotes</h1>
        <h1>{quotes}</h1>
        <h3 style={{fontWeight:"bold"}}>Author Name: {author}</h3>
        <button onClick={getAdvice}>Get Quotes</button>
      </div>
    </>
  );
}



export default App;
