import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react'; 
import style from './Detail.module.css';
import { Link } from 'react-router-dom';

const Detail = () => {
    const[character, setCharacter] = useState({});  // es character, se guarda toodo lo q busque fetch
    const {detailId} = useParams(); // useParams es un {objeto}
         
    useEffect(() => { // use effect simulas los ciclos de vida
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`) // me trae info de detailId, de un personaje en especifico
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
    return (  // character ? , el ? : es condicional, 1ro pregunta si hay info en estado, y cuadno se carga recien muestra. Sino, se puede romper la pag 
              // cuando esta tardando, es mejor ponerlo 
      <div className={style.div}> 
        <button className={style.button}>
          <Link to='/home'> Home </Link>
        </button>
            <h2 className={style.name}>{character?.name}</h2> 
            <p>Status: {character?.status}</p>
            <p>Species: {character?.species}</p>
            <p>Gender: {character?.gender}</p>
            <p>{character?.origin?.name}</p>
           
            <img className={style.foto} src={character?.image} />
                       
        </div>
    )
}

export default Detail;