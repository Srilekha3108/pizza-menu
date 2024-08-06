// src/App.jsx

import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setPizzas(data))
      .catch(error => console.error('Error fetching pizza data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Pizza Menu</h1>
      <div className="pizza-list">
        {pizzas.map((pizza, index) => (
          <div key={index} className={`pizza-card ${pizza.Status}`}>
            <img src={pizza.PizzaImage} alt={pizza.PizzaName} className="pizza-image" />
            <div className="pizza-details">
              <h2>{pizza.PizzaName}</h2>
              <p>{pizza.PizzaType}</p>
              <p>{pizza.PizzaPrice}</p>
              <p className="status">
                {pizza.Status === 'Active' ? '✅ Active' : '❌ InActive'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
