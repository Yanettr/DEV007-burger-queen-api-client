import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import '../../components/modal/Modal.css'; 

ReactModal.setAppElement('#root');

const Modal = ({ isOpen, onRequestClose, handleClickModal, text, textBtn, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="ModalApp"
      className="modal" 
      overlayClassName="overlay" 
      shouldCloseOnEsc={true} 
    >
      <h1 className='modal-text'>{text}</h1>
      <div className='container-btn-modal-accept-cancel'>
        {textBtn === 'Borrar' && <button className='btn-accept' onClick={handleClickModal}>{textBtn}</button>}
        {textBtn !== 'Borrar' && <button className='btn-cancel' onClick={onRequestClose}>Cancelar</button>}
      </div>
      {textBtn !== 'Borrar' && children}
    </ReactModal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  handleClickModal: PropTypes.func,
  text: PropTypes.string.isRequired,
  textBtn: PropTypes.string
};

export default Modal;

