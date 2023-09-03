import ReactModal from 'react-modal';
import { PropTypes } from 'prop-types';
import { customStyles, ContainerButtonModal } from './ModalStyles.jsx';


ReactModal.setAppElement('#root');

const ModalApp = ({ isOpen, onRequestClose, handleClickModal, text, textBtn, children }) => {

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="ModalApp"
      style={customStyles}
    >
      <h1 className='modal-text'>{text}</h1>
      {textBtn !== 'Borrar' && children}
      <ContainerButtonModal className='container-btn-modal-accept-cancel'>
        {textBtn === 'Borrar' && <button className='btn-accept' onClick={handleClickModal}>{textBtn}</button>}
        <button className='btn-cancel' onClick={onRequestClose}>Cancelar</button>
      </ContainerButtonModal>
    </ReactModal>
  );
};

ModalApp.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  children: PropTypes.object,
  handleClickModal: PropTypes.func,
  text: PropTypes.string,
  textBtn: PropTypes.string
}
export default ModalApp;