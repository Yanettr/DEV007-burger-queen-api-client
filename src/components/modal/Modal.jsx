import ReactModal from 'react-modal';
import { PropTypes } from 'prop-types';
import './modalCustom.css'; 

ReactModal.setAppElement('#root');

const Modal = ({ isOpen, onRequestClose, handleClickModal, text, textBtn, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="ModalApp"
      className="custom-modal" 
      overlayClassName="overlay" 
    >
      <h1 className='modal-text'>{text}</h1>
      {textBtn !== 'Borrar' && children}
      <div className='container-btn-modal-accept-cancel'>
        {textBtn === 'Borrar' && <button className='btn-accept' onClick={handleClickModal}>{textBtn}</button>}
        <button className='btn-cancel' onClick={onRequestClose}>Cancelar</button>
      </div>
    </ReactModal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  children: PropTypes.object,
  handleClickModal: PropTypes.func,
  text: PropTypes.string,
  textBtn: PropTypes.string
}

export default Modal;
