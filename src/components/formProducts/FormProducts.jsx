/* eslint-disable no-unused-vars */
import React from 'react'
import { useForm } from 'react-hook-form'
import Select from 'react-select'
import './FormProducts.css'
import { PropTypes } from 'prop-types'
import Button from '../button/Button'

const FormProducts = ({ handleAddEditProduct, newProductData, setNewProductData, handleConfirmEditClickProducts, handleCloseModalProducts }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const newProductNameValue = (event) => {
        setNewProductData({ ...newProductData, name: event.target.value });
    };

    const newProductImageValue = (event) => {
        setNewProductData({ ...newProductData, image: event.target.value });
    };

    const newProductPriceValue = (event) => {
        setNewProductData({ ...newProductData, price: event.target.value });
    };

    const newProductTypeValue = (selectedOption) => {
        setNewProductData({ ...newProductData, type: selectedOption.value });
    };

    const options = [
        { value: 'Desayuno', label: 'Desayuno)' },
        { value: 'Almuerzo', label: 'Almuerzo' },
    ];

    return (
        <form className='container-form' onSubmit={handleSubmit((data) => {
            console.log('form submit data', data);
            handleAddEditProduct(newProductData);
        })}>
            <div className='container-input-form-products'>
                <input type='text'{...register('name', { required: true })} value={newProductData.name} onChange={newProductNameValue} className='my-input' placeholder='nombre del producto' />
                {errors.email && <p>nombre requerido</p>}
                <input type='url'{...register('image', { required: true })} value={newProductData.image} onChange={newProductImageValue} className='my-input' placeholder='URL de la imagen' />
                {errors.password && <p>URL requerida</p>}
                <input type='text'{...register('price', { required: true })} value={newProductData.price} onChange={newProductPriceValue} className='my-input' placeholder='Precio' />
                {errors.password && <p>Precio requerido</p>}

                <Select
                    onChange={newProductTypeValue}
                    options={options}
                    value={newProductData.type ? { value: newProductData.type, label: newProductData.type } : null}
                />
                <Button
                    label='CONFIRMAR'
                    classButton='buttonsModal'
                    onClick={handleConfirmEditClickProducts}
                />
                <Button
                    label='CANCELAR'
                    onClick={handleCloseModalProducts}
                    classButton='buttonsModal'
                />
            </div>
        </form>
    );
};

FormProducts.propTypes = {
    isEditForm: PropTypes.bool,
    handleAddEditProduct: PropTypes.func,
    newProductData: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.string,
        type: PropTypes.string,
    }),
    setNewProductData: PropTypes.func,
    handleConfirmEditClickProducts: PropTypes.func, // Agrega propTypes para tus funciones
    handleCloseModalProducts: PropTypes.func, // Agrega propTypes para tus funciones
};

export default FormProducts;
