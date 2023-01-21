import Navbar from "../components/Navbar";
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import Social from '../components/Social';
import './home.css';

function Contatos () {
    return(
        <div className="contacts-container">
            <Navbar />
            <h1>Página Home</h1>
            <p>Cadastre um usuário e colabore com a  prevenção de alagamentos!</p>
            
            <p>Veja abaixo nosso contato: 👇 </p>
           
            <footer>
            <Social url='https://www.linkedin.com/in/jonas-willian-83086821b/'>
            <FaLinkedin size={38} color='#fff' />
            </Social>

            <Social url='https://github.com/JonasWillian97'>
            <FaGithub size={38} color='#fff' />
            </Social>
            </footer>
        </div>
    )
}

export default Contatos