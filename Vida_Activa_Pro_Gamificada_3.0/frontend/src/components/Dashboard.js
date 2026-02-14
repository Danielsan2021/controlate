
import React from "react";
import { Line } from "react-chartjs-2";

const Dashboard = () => {
  const data = {
    labels: ["Lun","Mar","Mie","Jue","Vie"],
    datasets: [{
      label: "Minutos Actividad Física",
      data: [30,45,20,60,50]
    }]
  };

  return (
    <div style={{maxWidth:"600px",margin:"auto"}}>
      <Line data={data}/>
    </div>
  );
};

export default Dashboard;
