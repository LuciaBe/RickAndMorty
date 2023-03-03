import SearchBar from '../Search Bar/SearchBar';
import style from './Nav.module.css';
import {Link} from 'react-router-dom';




const Nav = ({onSearch, todos, onClear}) => { // onAddRandom llamo por props
    return(
        <nav className={style.nav}>
            
            <Link className={style.link} to='/about'>About</Link>
            <Link className={style.link} to='/home'>Home</Link>
            
            <Link className={style.link} to='/favorites'>Favorites</Link>
            <Link className={style.link} to='/'>LOGOUT</Link>
        
            <SearchBar clasName={style.search} onSearch= {onSearch} todos={todos} onClear={onClear}/>
            
        </nav>       
    )
}

export default Nav; 