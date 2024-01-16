import { useState } from "react";
import "./App.css";
import Passwordgenerator from "./Passwordgenerator";


function App() {
  const [color, setColor] = useState("#121212");


  return (
    <div className="w-full h-screen duration-200 justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center top-2 inset-x-6 mx-20 px-2 py-2">
        <div className="flex flex-wrap gap-3 justify-center bg-white rounded-xl px-4 py-1">
          
          <button onClick={()=>setColor("#1D2B53")}
          className=" outline-none px-4 py-1 rounded-xl shadow-lg border-solid border-2 border-black bg-blue-600"> 
            </button>

          <button onClick={()=>setColor("#16a34a")}
          className=" outline-none px-4 py-1 rounded-xl shadow-lg border-solid border-2 border-black bg-green-600">
            </button>
          
          <button onClick={()=>setColor("#9f1239")}
          className=" outline-none px-4 py-1 rounded-xl shadow-lg border-solid border-2 border-black bg-red-600">
            </button>

            <button onClick={()=>setColor("#f59e0b")}
          className=" outline-none px-4 py-1 rounded-xl shadow-lg border-solid border-2 border-black bg-amber-500"> 
            </button>

        </div>
      </div>
      <div className=" flex justify-center ">
        <div className=" fixed top-6 bg-slate-50/50 text-center rounded-xl w-full max-w-xl shadow-md px-4 my-6"> 

        <h2 className=''><b>Password Generator</b></h2>
        <p>try this password generator</p>

        <Passwordgenerator color={color}/>
         </div>
        </div>
    </div>

    
  );
}

export default App;
