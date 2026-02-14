
import React from "react";
import { motion } from "framer-motion";

const Badges = ({points}) => {

  const getBadge = () => {
    if(points >= 3000) return "🏆 Maestro Bienestar";
    if(points >= 1500) return "🌳 Campeón Vital";
    if(points >= 500) return "🌿 Héroe Activo";
    return "🌱 Explorador Saludable";
  }

  return (
    <motion.div 
      initial={{scale:0}} 
      animate={{scale:1}} 
      transition={{duration:0.5}}
      style={{textAlign:"center",marginTop:"20px"}}
    >
      <h2>Medalla Actual</h2>
      <h1>{getBadge()}</h1>
      <p>{points} puntos</p>
    </motion.div>
  );
}

export default Badges;
