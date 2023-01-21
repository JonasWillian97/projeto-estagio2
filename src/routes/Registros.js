import { useState } from 'react';
import Navbar from '../components/Navbar';
import Modal from 'react-modal';
import './registros.css';

Modal.setAppElement ( '#root' ) 

function Registros () {
    const[nome, setNome] = useState('');
    const [cidade, setCidade] = useState('');
    const [intensidade, setIntensidade] = useState('');
    const [data, setData] = useState('');
    const [vetor, setVetor] = useState([])

    const [isOpen, setIsOpen] = useState(false);

 const Cadastrar = () => {
    let Obj = {'nome':'', 'cidade':'', 'intensidade':'', 'data' : ''}
    setVetor([...vetor, Obj]);
    setNome('');
    setCidade('');
    setIntensidade('');
    setData('');
    
 }

    const  customStyles  =  { 
        content : { 
          top : '50%' , 
          left : '50%' , 
          right : 'auto' , 
          bottom : 'auto' , 
          marginRight : '-50%' , 
          transform : 'translate(-50%, -50%)' , 
        } , 
      } ;
    
    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }
    return(
        <div className='modal'>
            <Navbar />
          
          <button className='ocorrencyButton' onClick={handleOpen}>Registrar Ocorrência</button>

            <Modal  
                    isOpen = { isOpen } 
                   
                    onRequestClose = { handleClose } 
                    style = { customStyles } 
                    contentLabel = "Example Modal" 
                  > 
            
          <form className='form'>
                <h2 className='title'>Cadastrar</h2>
                <div className='input'>
                    <label>Nome do Usuário</label> <br/>
                    <input type='text' placeholder="Nome do usuário..."  value={nome} onChange={e => setNome(e.target.value)} />
                </div>

                <div>
                    <label>Cidade</label> <br/>
                    <input type='text' placeholder="Digite uma cidade..." value={cidade} onChange={e => setCidade(e.target.value)}  />
                </div>

                <div className='select'>
                    <label>Intensidade</label> <br/>
                    <select  value={intensidade} onChange={e => setIntensidade(e.target.value)} >
                        <option>-Intensidade...</option>
                        <option>Baixa</option>
                        <option>Moderada</option>
                        <option>Alta</option>
                    </select>
                </div>

                <div>
                    <label>Data</label> <br/>
                    <input type='datetime-local' placeholder="Insira uma data..."  value={data} onChange={e => setData(e.target.value)}  />
                </div>

                    <button className='button' onClick={Cadastrar}>Cadastrar</button>

             
            </form>

            </Modal>

            {
                vetor.map((Obj) => (
                    <p>{Obj.nome} - {Obj.cidade} - {Obj.intensidade} - {Obj.data}</p>
                ))
            }
               
            
        </div>
    )
}

export default Registros;