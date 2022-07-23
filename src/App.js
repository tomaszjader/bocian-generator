import React, { useState } from 'react';
import './App.css';
import logo from './krelowski1.png'
const bocianSenten = [
  'Ej ty ja wiem co robię',
  'Próbowałem zabrać się za pracę ale nie miałem weny',
  'Muszę serio ograniczyć picie',
  'Próbowałem zabrać się za pracę ale nie miałem humoru',
  'Zachwilę to zrobię',
  'Jak ja nienawidzę Czernicha',
  'Muszę zacząć pisać pracę',
]
const App = () => {

  const [shake, setShake] = useState(false);
  const [bocianSentens, setbocianSentens] = useState('');
  const animate = () => {
    setShake(true);
    setTimeout(() => {
      setShake(false);
      setbocianSentens(bocianSenten[Math.floor((Math.random() * bocianSenten.length))])
    }, 1000);

  }

  return (
    <header className='bocian'>
      <div className='bocian'>
        <h1>Generator tekstów Bociana</h1>
        <h3>Kliknij w Mateusza żeby zobaczyć złota myśl na dziś!</h3>
        <div onClick={animate} className='bocian1'>
          <img src={logo} alt='asd' className={shake ? `shake` : null}></img>
        </div>
        <h4>Twoja myśl na dziś to:</h4>
        <div>{bocianSentens}</div>
      </div>
    </header>
  );

}

export default App;