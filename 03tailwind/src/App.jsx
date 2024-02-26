import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Cardss";


function App() {
  const [count, setCount] = useState(0);
  const myObj={
    username:"ayush",
    age:21
  }
  let array=[1,2,3]

  return (
    <>
      <h1 className="bg-green-400 text-black p4 rounded-xl mb-4">tailwind test</h1>

      {/* <Card channel='chai or code' myobject={myObj} someobj={array}/> */}
      <Card username="chai or code" btntext="click me"/>
      <Card   btntext="visit me"/>
      
    </>
  );
}

export default App;
