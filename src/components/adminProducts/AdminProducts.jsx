/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import AdminHeader from '../adminHeader/AdminHeader';
import { useNavigate, Link } from 'react-router-dom';
import './adminProducts.css';
import ButtonViews from '../buttonView/ButtonView';
import ModalApp from '../modal/Modal';
import FormProducts from '../formProducts/FormProducts';
import TableProducts from '../TableAdmin/TableProducts';

const AdminProducts = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem('accessToken');

  const [productList, setProductList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductType, setSelectedProductType] = useState('Productos');
  const [modalData, setModalData] = useState({
    text: '',
    buttonText: '',
    action: () => {},
  });
  const [newProduct, setNewProduct] = useState({
    name: '',
    type: '',
    image: '',
    price: '',
  });
  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    function fetchProducts() {
      fetch('http://localhost:8080/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${authToken}`,
        },
      })
        .then((resp) => resp.json())
        .then((dataProducts) => {
          setProductList(dataProducts);
        })
        .catch(error => {
          console.log(error)
        })
    }
    
    fetchProducts();
    
    const intervalId = setInterval(fetchProducts, 2500)

    return () => {
      clearInterval(intervalId)
    };
  }, [authToken]);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const deleteProduct = (product) => {
    fetch(`http://localhost:8080/products/${product.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${authToken}`,
      },
    })
      .then((resp) => resp.json())
      .then((deletedProduct) => {
        updateProductList(deletedProduct)
      })
      .catch(error => console.log(error))
  }

  const updateProductList = (updatedItem) => {
    setProductList(prevProductList => {
      return prevProductList.map(product => {
        if (product.id === updatedItem.id) {
          return { ...product, ...updatedItem };
        }
        return product;
      });
    });
  };

  const editProduct = (product) => {
    const updatedProduct = {
      name: product.name,
      type: product.type,
      image: product.image,
      price: product.price,
    };

    fetch(`http://localhost:8080/products/${product.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify(updatedProduct),
    })
      .then(() => {})
  }

  const addProduct = () => {
    const newProductData = {
      name: newProduct.name,
      type: newProduct.type,
      image: newProduct.image,
      price: newProduct.price,
    };

    fetch('http://localhost:8080/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify(newProductData),
    })
      .then(() => {
        setNewProduct({
          name: '',
          type: '',
          image: '',
          price: '',
        });
      });
  }

  const handleAddProduct = () => {
    setNewProduct({
      name: '',
      type: '',
      image: '',
      price: '',
    });

    setModalData({
      text: '¿Estás seguro que deseas AGREGAR un producto?',
      buttonText: 'Agregar',
    });

    openModal();
  }

  const handleEditProduct = (product) => {
    setNewProduct(product);
    setModalData({
      text: '¿Estás seguro que deseas EDITAR el producto?',
      buttonText: 'Editar',
      action: () => {
        setNewProduct(product);
        editProduct(product);
        closeModal();
      },
    });
    openModal();
  }

  const handleDeleteProduct = (product) => {
    setModalData({
      text: '¿Estás seguro que deseas BORRAR el producto?',
      buttonText: 'Borrar',
      action: () => {
        deleteProduct(product);
        closeModal();
      },
    });
    openModal();
  }

  const handleAddEditProduct = (product) => {
    if (isEditing) {
      editProduct(product);
      closeModal();
      setNewProduct({
        name: '',
        type: '',
        image: '',
        price: '',
      });
    } else {
      addProduct();
      closeModal();
      setNewProduct({
        name: '',
        type: '',
        image: '',
        price: '',
      });
    }
  }

  return (
    <div className='body'>
      <AdminHeader title='ADMIN' />
      <div>
        <Link to="/adminUsers">
          <ButtonViews Text1={'PRODUCTOS'} Text2={'USUARIOS'} />
        </Link>
      </div>
      <div className='container-dashboard-btnAddWorker'>
        <TableProducts
          setShowEditForm={setIsEditing}
          products={productList}
          openModal={openModal}
          closeModal={closeModal}
          modalIsOpen={isModalOpen}
          handleAddProduct={handleAddProduct}
          handleDeleteProduct={handleDeleteProduct}
          handleEditProduct={handleEditProduct}
        />
      </div>
      <ModalApp
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        handleClickModal={modalData.action}
        text={modalData.text}
        textBtn={modalData.buttonText}
      >
        <FormProducts
          handleAddEditProduct={handleAddEditProduct}
          newProductData={newProduct}
          setNewProductData={setNewProduct}
          handleClickModal={modalData.action}
          closeModal={closeModal}
          isEditForm={isEditing}
        />
      </ModalApp>
    </div>
  );
};

export default AdminProducts;
