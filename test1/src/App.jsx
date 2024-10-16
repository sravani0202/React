import {useState} from 'react'
const App = () => {
  const[name,setName]=useState("sravani")
  return (
    <div>
      <center>
        <h1>{name}</h1>
        <br/>
        <button onClick={()=>setName("sravani")}/>
      </center>
    </div>
  )
}

export default App