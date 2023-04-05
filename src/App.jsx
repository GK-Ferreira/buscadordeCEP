import { useState } from 'react'; 

import { FiSearch } from 'react-icons/fi';
import './styles.css';

import api from './services/api';
import Modal from './components/Modal';

function App() {

  const [input,setInput] = useState("");
  const [cep,Setcep] = useState({});
  const [modalOpen,setModalOpen] = useState(false);
  const [textModal,setTextModal] = useState('');

  //uma função assíncrona funciona para esperar uma requisição de outra página,geralmente usada com api´s e acompanhada de um await(espera) para esperar essa requisição

 async function handleSearch(){
    if(input === ""){
      setModalOpen(true);
      setTextModal('Digite algo na caixa de entrada!');
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      Setcep(response.data);
      setInput('');
    }
    catch{
      setModalOpen(true);
      setTextModal('Ops,erro ao buscar!tente novamente');
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">BUSCADOR CEP</h1>

      <div className="container-input">
        <input type="text"
        placeholder="digite seu cep..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color = "#fff" />
          </button>
      </div>

      {Object.keys(cep).length > 0 && (
      <main className='main'>
        <h2>CEP: {cep.cep}</h2>

        <span>{cep.logradouro}</span>
        <span>complemento: {cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade} - {cep.uf}</span>
      </main>
      )}
    <Modal
    setModalOpen={modalOpen}
    setCloseModal={()=> setModalOpen(!modalOpen)}
    text={textModal}
    />
    </div>
  )
}

export default App
