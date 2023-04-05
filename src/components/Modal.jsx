import { ModalStyled } from "../styles/Modal.style";
import {  FiX  } from 'react-icons/fi'

const Modal = ({setModalOpen,setCloseModal,text}) => {
    if(setModalOpen){
        return <ModalStyled>
            <button onClick={setCloseModal}> <FiX color="#000" size={24} /></button>
                <p>{text}</p>
            </ModalStyled>
    }
}

export default Modal;