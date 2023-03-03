// CON DISTRACTORING DE PROPS: 
import style from './Card.module.css';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; //HOOKS 
import { useState, useEffect } from 'react';
import { addFavorite, deleteFavorite } from '../../redux/action';


export default function Card({onClose,name,species,gender,image,id}) { // este componente CARD, quiero q se pueda usar con cualquier personaje, NO SOLO RICK 
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites) // USE SELECTOR siempre recibe por param el estado global. Me quedo solo con myFavorites
   const [isFav,setIsFav] = useState(false);

   const handleFavorite = ()=> {
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(id))
      }
      else{
         setIsFav(true);
         dispatch(addFavorite({onClose,name,species,gender,image,id}))
      }
   }
   useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);
   
   return (  //fc on click pasa por props    
      <div className={style.container}> 
      {
         isFav ? (<button className={style.buttonCora} onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>) //ternario 
      }
      
          <button onClick={onClose} className={style.buttonX}>X</button>
         <Link className={style.link} to={`/detail/${id}`}>
         <h2 className={style.h2Name}>{name}</h2>
         </Link>
         <h2 className={style.h2}>{species}</h2>
         <h2 className={style.h2}>{gender}</h2>
         <img  src={image} alt="img" className={style.img} />
      </div>
   );
}



/* SIN DISTRACTORING DE PROPS:

export default function Card(props) { // este componente CARD, quiero q se pueda usar con cualquier personaje, NO SOLO RICK 
   return (  //fc on click pasa por props    
      <div> 
          <button onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt="img" />
      </div>
   );
}*/