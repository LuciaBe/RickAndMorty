import React from "react";
import { useSelector } from "react-redux";
import style from './Favorites.module.css';
import {Link} from 'react-router-dom'; 


const Favorites = () => {
    const {myFavorites} = useSelector(state => state) //OP 2 USE SELECTOR: con destructuring, porq sabemos q es un obj 
    return(                                          // => TODO state, porq el destruct ya lo hice antes    
        <div >
            {
                myFavorites?.map((character) => { //recorremos a cada personaje, y por cada uno, hacemos el render 
                    return(
                        <div className={style.div}>
                              
                              <Link className={style.link} to={`/detail/${character.id}`}>
                              <h2 className={style.h2Name}>{character.name}</h2>
                              </Link> 
                              <h2 className={style.h2}>{character.species}</h2>
                              <h2 className={style.h2}>{character.gender}</h2>
                              <img  src={character.image} alt={character.name} className={style.img} />
                       </div>
                    )
                } )
            }
        </div>

    )
}

export default Favorites;
