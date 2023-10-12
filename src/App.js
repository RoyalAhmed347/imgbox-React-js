import React from "react";
import './App.css';
import Card from "./Card";
import Pdata from "./Pdata";

let id = 0;

function App() {
  return(
    <>
      <div className="heading">
        <h1>Top Cars in World</h1>        
      </div>
      <main className="main_card_box">

        {Pdata.map((card)=>{
          id++;
          return (
            <Card 
            key  = {id}
            name = {card.name}
            imdSrc = {card.imgSrc}
            decs = {card.decs}
        /> 
          );

        })}
        
      </main>
    </>
  )
}


export default App;