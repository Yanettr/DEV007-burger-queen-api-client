import ReactModal from 'react-modal';
import { PropTypes } from 'prop-types';
import { customMessageStyles, ContainerButtonModalMessage } from './modalMessageStyles';
// import styled from 'styled-components';

ReactModal.setAppElement('#root');

const ModalMessage = ({ isOpen, onRequestClose, text}) => {

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="ModalApp"
      style={customMessageStyles}
    >
      <h1 className='modal-text'>{text}</h1>
      <ContainerButtonModalMessage className='container-btn-modal-message-accept-cancel'>
        <button className='btn-modal-message' onClick={onRequestClose}>Cerrar</button>
      </ContainerButtonModalMessage>
    </ReactModal>
  );
};

ModalMessage.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  text: PropTypes.string,
}
export default ModalMessage;