/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import './adminUsers.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AdminHeader from '../adminHeader/AdminHeader';
import FormUsers from '../../components/formUsers/FormUsers';
import ModalApp from '../modal/Modal';
import ButtonViews from '../buttonView/ButtonView';
import TableUsers from '../TableAdmin/TableUsers';

 const AdminUsers = () => { 
    const [workers, setWorkers] = useState([]);
    const [modalIsOpenId, setModalIsOpenId] = useState(false)
    const navigate = useNavigate();
  
  const logOut=()=>{
    sessionStorage.clear();
    navigate('/')
  }

    const token = localStorage.getItem('accessToken');
    
    useEffect(() => {
      function getWorkers() {
        fetch('http://localhost:8080/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`,
          }
        })
          .then((resp) => resp.json())
          .then((dataWorkers) => {

            setWorkers(dataWorkers);
          })
          .catch(error => {
            console.log(error)
          })
      }
  
      getWorkers();
      
      const intervalId = setInterval(getWorkers, 2500)

      return () => {
        clearInterval(intervalId)
      };
    }, [token])

    const [modalData, setModalData] = useState({
      modalText: '',
      modalBtnText: '',
      aceptarFn: () => { }
    });

    const openModal = () => {
      setModalIsOpenId(true)
    }

    const closeModal = () => {
      setModalIsOpenId(false)
    }
    const deleteWorker = (user) => {
      console.log('eliminar')
      console.log('HOLA', user.id)
      fetch(`http://localhost:8080/users/${user.id}`, {
  
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`,
        },
  
      })
        .then((resp) => resp.json())
        .then((user) => {
          updateWorkersData(user)
        })
        .catch(error => console.log(error))
  
      console.log('eliminar')
    }

    const updateWorkersData = (user) => {
      setWorkers(prevWorkers => {
        return prevWorkers.map(worker => {
          if (worker.id === user.id) {
            return { worker };
          }
          return worker;
        });
      });
    };
    const [editUserData, setEditUserData] = useState({
      email: '',
      password: '',
      role: ''
    });
  
    const editWorker = (user) => {
      console.log('editar', user)
      const editWorker = {
        email: user.email,
        password: user.password,
        role: user.role
      };
      fetch(`http://localhost:8080/users/${user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(editWorker),
      })
        .then(() => {

        })
  
    }
    const [newUserData, setNewUserData] = useState({
      email: '',
      password: '',
      role: ''
    });
    const addWorker = () => {
      console.log('ADDING WORKER')
      //elemento a enviar, trabajador
      const newWorker = {
        email: newUserData.email,
        password: newUserData.password,
        role: newUserData.role
      };
      fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(newWorker),
      })
        .then(() => {
            setNewUserData({
              email: '',
              password: '',
              role: ''
            });
        })
    }
    const handleAddWorker = () => {
      console.log('Abrir el modal');
      setNewUserData({
        name:'',
        email: '',
        password: '',
        role: ''
      });
      setModalData({
        modalText: '¿Estás seguro que deseas AGREGAR al trabajador?',
        modalBtnText: 'Agregar'
      });
      openModal();
    };
    const handleEditar = (worker) => {
      setNewUserData(worker);
      setModalData({
        modalText: '¿Estás seguro que deseas EDITAR al trabajador?',
        modalBtnText: 'Editar',
        aceptarFn: () => {
          setNewUserData(worker);
          editWorker(worker);
          closeModal();
        }
      });
      openModal();
    };
    const handleBorrar = (worker) => {

      setModalData({
        modalText: '¿Estás seguro que deseas BORRAR al trabajador?',
        modalBtnText: 'Borrar',
        aceptarFn: () => {
          deleteWorker(worker)
          closeModal();
        }
      });
      openModal();
    };
    const [showEditForm, setShowEditForm] = useState(true)
  
    const handleAddEdit = (worker) => {
      if (showEditForm) {
        editWorker(worker);
        closeModal();
        setEditUserData({
          email: '',
          password: '',
          role: ''
        });
      }
      else {
        addWorker();
        closeModal();
        setNewUserData({
          email: '',
          password: '',
          role: ''
        });
      }
    }
    return (
      <div className='body'>
      <AdminHeader title='ADMIN' />

      <div className='conteiner-button'>
        {token ? (
          <Link to="/admin">
            <ButtonViews Text1={'PRODUCTOS'} Text2={'USUARIOS'} Text3={'SALIR'} />
          </Link>
        ) : (
          <button onClick={logOut}>Salir</button>
        )}
      </div>

      <div className='container-dashboard-btnAddWorker'>
        <TableUsers
          setShowEditForm={setShowEditForm}
          workers={workers}
          openModal={openModal}
          closeModal={closeModal}
          modalIsOpen={modalIsOpenId}
          handleAddWorker={handleAddWorker}
          handleBorrar={handleBorrar}
          handleEditar={handleEditar}
        />
      </div>
      <ModalApp
        isOpen={modalIsOpenId}
        onRequestClose={closeModal}
        handleClickModal={modalData.aceptarFn}
        text={modalData.modalText}
        textBtn={modalData.modalBtnText} 
      >
        <FormUsers
          handleAddEdit={handleAddEdit}
          newUserData={newUserData}
          setNewUserData={setNewUserData}
          handleClickModal={modalData.aceptarFn}
          closeModal={closeModal}
          isEditForm={showEditForm} 
        />
      </ModalApp>
    </div>
  );
};

export default AdminUsers;




