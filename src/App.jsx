import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import './App.css'

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  // Fetch bots on component mount
  useEffect(() => {
    fetch('https://bots-si0g.onrender.com/bots')
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch bots");
        return response.json();
      })
      .then((data) => {
        const limitedBots = data.slice(0, 10);
        setBots(limitedBots);
      })
      .catch((error) => console.error("Error fetching bots:", error));
  }, []);

  // Enlist a bot to the army
  const enlistBot = (bot) => {
    if (!army.some((b) => b.bot_class === bot.bot_class)) {
      setArmy([...army, bot]);
    }
  };

  // Discharge a bot from the army
  const dischargeBot = (id) => {
    setArmy(army.filter((bot) => bot.id !== id));
  };

  // Delete a bot from both army and collection
  const deleteBot = (id) => {
    fetch(`https://bots-si0g.onrender.com/bots/${id}`, { method: 'DELETE' })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to delete bot");
        setArmy(army.filter((bot) => bot.id !== id));
        setBots(bots.filter((bot) => bot.id !== id));
      })
      .catch((error) => console.error("Error deleting bot:", error));
  };

  return (
    <div className="App">
      <h1>Bots App</h1>
      {/* Render BotCollection */}
      <BotCollection bots={bots} enlistBot={enlistBot} />

      {/* Render YourBotArmy */}
      <YourBotArmy army={army} dischargeBot={dischargeBot} deleteBot={deleteBot} />

    </div>
  );
}

export default App;
