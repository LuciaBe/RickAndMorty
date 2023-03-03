import './App.css'
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import axios from 'axios';
import SearchBar from './components/Search Bar/SearchBar';
 

function App () { 
  const location = useLocation(); // LOCATION es un {objc}, con propiedad pathname
  const navigate = useNavigate();
  const[characters,setCharacters] = useState([ ]); // creo estado characters, donde guardo array
  const [access, setAccess] = useState(false);
  const username = 'lubellardi@gmail.com';
  const password = '123abcd';

  const login = (userData)=>{ // veo si el username q me mandan es = a la const creada arriba  
   if (userData.username === username && userData.password === password) {
      setAccess(true)
      navigate('/home');
  }
}

//PRUEBA DE SEGURIDAD: 
  useEffect(() => {
    !access && navigate('/') // TRUE y ruta FORM '/'
 }, [access]);   // para saberlo, OBSERVA al estado access
 
 // FC ON SEARCH CREADO CON PROMESAS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! : 
 const onSearch = async (character) => {
  try {
    const response = await fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`);
    const data = await response.json();
    
    if (data.name) {
      // Comprobar si el personaje ya existe en la lista de personajes agregados
      if (!characters.some((c) => c.id === data.id)) {
        // Si el personaje no existe, agregarlo al estado
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        // Si el personaje ya existe, mostrar un mensaje de error
        window.alert('Este personaje ya fue agregado');
      }
    } else {
      window.alert('No hay personajes con ese ID');
    }
  } catch (error) {
    console.error('Error al buscar el personaje:', error);
  }
};

//SOME: función de los arrays en JavaScript que permite comprobar si al menos un elemento del array cumple con una condición específica.
/////////// TODOS /////////////////////////////////////////////////////////////////////////////////////////////
const todos = async () => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    setCharacters(data.results);
  } catch (error) {
    console.error('Error al buscar los personajes:', error);
  }
};

/////////////////////FC ON CLOSE///////////////////////////////////////////////////////////////////////////////////
  const onClose = (id) => {
    setCharacters( 
      characters.filter(character => character.id !== id) 
    )
  }
//////////ON CLEAR ///////////////////////////////////////////////////////////////////////////////////////////////
const onClear = () => {
  setCharacters([]);
};

//////////////// RENDER ///////////////////////////////////////////////////////////////////////////////////////
  return (   // LOCATION CONDICIONAL TERNARIO: si el pathname es '/', mostrame el form, sino mostrame el nav 
  
    <div className='App' style={{ padding: '25px' }}> 
    {location.pathname === '/' ? <Form login={login} /> : <Nav onSearch={onSearch}  todos={todos} onClear={onClear}/>}
      <Routes>
        <Route path='/home' element= {<Cards onClose= {onClose} characters={characters} /* props */ />} />
        <Route path='/about' element= {<About/>} />
        <Route path='/detail/:detailId' element={<Detail/>} /> 
        <Route path='/favorites' element={<Favorites/>}></Route>

      </Routes>       
    </div> // : DETAIL,  puedo poner /detail/kjabdjkabd que siempre me va a mostrar detail 
            // asi despues puedo poner detail/2 detail
            // :detaildId es una PROPIEDAD q va cambiando segun lo q escriba el usuario 
    
  )
}

export default App 
