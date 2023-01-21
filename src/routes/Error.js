import {TbError404Off} from 'react-icons/tb'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
import './error.css';

function Error () {
    return (
        <div className='error'>
            <Navbar />
            <h1 className='h1'>Página não encontrada!</h1>
            <TbError404Off size={200} color='#fff' />
           <Link to='/'><button>Voltar para Home</button></Link>
        </div>
    )
}

export default Error