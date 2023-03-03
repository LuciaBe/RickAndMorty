import { ADD_FAVORITE, DELETE_FAVORITE } from "./action-types"

const initialState ={
    myFavorites: [],
}

const reducer = (state = initialState, action) => {  //{type, payload} = action (como la action es un {obj}, podemos hacer destructuring)
    switch(action.type){
        case ADD_FAVORITE: return {
            ...state,
            myFavorites: [...state.myFavorites, action.payload] // concateno, NO PISO 
        }
        case DELETE_FAVORITE: return{
            ...state,
            myFavorites: state.myFavorites.filter((char) => char.id !== action.payload) //filtro los personajes q no sean payload 
        }

        default: return {...state}
    }
}

export default reducer;