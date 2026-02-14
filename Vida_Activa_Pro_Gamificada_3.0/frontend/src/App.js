
import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Badges from "./components/Badges";

function App() {
  const [points, setPoints] = useState(0);

  const addPoints = (value) => {
    setPoints(points + value);
  };

  return (
    <div style={{background:"linear-gradient(135deg,#1b5e20,#43a047,#81c784)",minHeight:"100vh",color:"white",padding:"20px"}}>
      <h1 style={{textAlign:"center"}}>🌿 Vida Activa Pro Gamificada</h1>
      <Dashboard />
      <div style={{textAlign:"center",marginTop:"20px"}}>
        <button onClick={()=>addPoints(50)}>+50 Actividad Física</button>
        <button onClick={()=>addPoints(20)} style={{marginLeft:"10px"}}>+20 Fruta</button>
        <button onClick={()=>addPoints(40)} style={{marginLeft:"10px"}}>+40 Menos Pantalla</button>
      </div>
      <Badges points={points}/>
    </div>
  );
}

export default App;
