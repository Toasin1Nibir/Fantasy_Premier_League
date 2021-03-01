// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import playerdata from './data/data.json'
import Player from './Components/Player/Player'
import Budget from './Components/Budget/Budget'


function App() {
  const [player , setPlayer] = useState([])
  const [addPlayercart, addPlayersetCart] = useState([])
  useEffect(() =>{
    setPlayer(playerdata)
    
  },[])
  const handleAddPlayer = (players) => {
    const newCart = [...addPlayercart , players]
    addPlayersetCart(newCart)
  }
  return (
    <div className="App">
     
     <h1 style={{color:'blue'}}>Fantasy Premier League</h1>
      <h1>Total selected Players: {addPlayercart.length}</h1>{
        addPlayercart.map(picked => <li>{picked.name} ${picked.salary}</li>)
      
      }
      
   
      <Budget addPlayercart={addPlayercart}></Budget>
   
    
     <ul>
       {
         player.map(players =><Player players={players} key={players.id} handleAddPlayer={handleAddPlayer}></Player>)
       }
     </ul>
     
    </div>
  );
}

export default App;
