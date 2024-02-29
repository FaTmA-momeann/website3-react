

import { useRef, useState } from "react";
import "./App.css";
function App() {

  const [x , setx] = useState([]) //مخزن
  
  const inputref = useRef()
  
  const add = () =>{
    const value = inputref.current.value //القيمة بداخلة
    const newData = {completed : false , value}

    setx([...x , newData])
    
    inputref.current.value = "" 
  }
   const itemDone = (index) =>{
   const newx = [...x]
  newx[index].completed = !newx[index].completed

    setx(newx)
  }

  const toDelete = (index) => {
    const newx = [...x]
    newx.splice(index,1)
    setx(newx)
  }

  return (
   <div className="App">

      <h2>To do list </h2>
       <ul>
           {
              x.map(({value ,completed} , index)=>{  //عدي علي كل عنصر سمية item
                return <div className="div10">
                <li className={completed ? "diffstyle" :" "} onClick={() => itemDone(index)}>{value}</li>
                <span onClick={() => toDelete(index)}>X</span>
                </div>
              })
           }     
       </ul>

       <input ref={inputref} placeholder="Enter new task..."/>
       <button onClick={add}>Add</button>

   </div>

  );
}

export default App;
