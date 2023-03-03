import Card from "../Card/Card"
import style from './Cards.module.css';

export default function Cards({characters, onClose}) { // paso por props 
   
   return (
   <div>
      
      {characters.map(({id,name,species,gender,image},index)=> {
       return  <Card className= {style.container}
         key= {index} // es para uso propio, interno, de REACT. NO podemos acceder a el 
         name ={name}
         species={species}
         gender={gender}
         image={image}
         onClose={()=> onClose(id)} // como le tengo q pasar id como propiedad, tengo q hacer arrow fc 
         id = {id} // no es lo mismo que key

      ></Card> })
   }  </div>
   )
}
/*  SIN DISTARCTORING DE PROPS:

   <div>
      {characters.map((char)=> <Card 
         name ={char.name}
         species={char.species}
         gender={char.gender}
         image={char.image}

      ></Card> )}
      */