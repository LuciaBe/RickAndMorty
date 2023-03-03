import style from './About.module.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';


   // VER FILTER:  no me funciona 
const Imagen = styled.img`
    filter: drop-shadow: 10px 10px 5px #fff; 
    filter: blur(10px)
    opacity: 0.9;
    position: relative;
    animation: mymove 5s infinite;

  @keyframes mymove {
    0%   {top: 0px;}
  
    50%  {top: 50px;}
  
    100% {top: 0px;}
  }
`
const Container = styled.div`
    color:white;
    position:relative;
    margin-top:5px ;
    background: rgba(6, 6, 8, 0.5);
    border-radius:1em;
    display: inline-block;
    padding: 2em;
    
`    
const Titulo = styled.div`
font-size:xx-large;
margin-top:-20px;
text-shadow: 2px 2px 5px #999;
`
const Titulo2 = styled.div`
font-size:medium;
padding:10px
`
const Titulo3 = styled.div`
font-size:medium;
padding:10px
`

const About = () => {
  

    return(
        <div className={style.div}>
            <Container >
            <Titulo >RICK AND MORTY by Lucia Bellardi</Titulo>
            <Titulo2 >Bienvenidos a mi primer aplicación web</Titulo2>
            <Titulo3 >Seguime en las redes: 
           
            <div style={{fontSize:'1.5em', color: 'white', position:'absolute', display:'inline-block', marginLeft: '0.5em', marginTop:'-0.2em'}}>
            <FontAwesomeIcon icon={faLinkedin}onClick={()=>{window.open('https://www.linkedin.com/in/lucia-bellardi-7184481a5/')}}/>{' '}
            <FontAwesomeIcon icon={faGithub} onClick={()=>{window.open('https://github.com/LuciaBe')}}/>{' '}
            <FontAwesomeIcon icon={faInstagram} onClick={()=>{window.open('https://www.instagram.com/lubellardi/')}}/>{' '} 
            <FontAwesomeIcon icon={faFacebook} onClick={()=>{window.open('https://www.facebook.com/lu.bellardi')}}/>{' '}
            </div>
           
            </Titulo3>
            </Container>
            
           <Imagen src='foto4.png' alt='imagen' ></Imagen>
           
        </div>
        
    )
    
}

export default About;