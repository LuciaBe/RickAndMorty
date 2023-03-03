import style from './SearchBar.module.css';
import { useState } from 'react';
export default function SearchBar(props) {
   const [character, setCharacter] = useState('');
 
   const handleChange = (event) => {
     setCharacter(event.target.value);
   };
 
   const onClear = () => {
    setCharacter('');
    props.onClear();
  };

   const randomId = Math.floor(Math.random() * 671) + 1;
   return (
      
     <div>
       <input
         type='search'
         placeholder='Escribe un id...'
         value={character}
         onChange={handleChange}
         className={style.input}
       />
       <button onClick={() => props.onSearch(character)} className={style.button}>
         Agregar
       </button>
       
       <button onClick={() => props.onSearch(randomId)} className={style.button2}>
         Aleatorio
       </button>
       <button onClick={() => props.todos()} className={style.button2}>  Ver más</button>
       <button onClick={() => onClear()} className={style.button2}> Limpiar </button>

 
      
       
     </div>
   );
 }
 

 
 
 
