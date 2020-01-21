import React, { useState, useEffect } from "react";
import NameDisplay from "./NameDisplay";
import axios from "axios";

const Hooks = () => {
  const [count, setCount] = useState(0);
  if (count < 0) {
    setCount(10000);
  }
  if (count > 10000) {
    setCount(0);
  }
  const [name, setName] = useState("");
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
      setPokemon(res.data.results);
    });
  }, []);
  useEffect(() => {
    console.log("Count useEffect Invoked");
  }, [count]);
  console.log(pokemon)
  let pokemonName = pokemon.length ? pokemon.map(el => (<div>{el.name}</div>)): null
  return (
    <div>
      <h1>Name</h1>
      <h1>{pokemonName}</h1>
      {/* <NameDisplay name={name} /> */}
      <input value={name} onChange={e => setName(e.target.value)} type="text" />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Hooks;
