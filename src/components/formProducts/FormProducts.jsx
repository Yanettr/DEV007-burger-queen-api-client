import { useForm } from 'react-hook-form';
import Select from 'react-select';
import './FormProducts.css'
import { PropTypes } from 'prop-types'

const FormProducts = ({ isEditForm, handleAddEditProduct, newProductData, setNewProductData }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const newProductNameValue = (event) => {
        setNewProductData({ ...newProductData, name: event.target.value })
    };
 
    const newProductImageValue = (event) => {
        setNewProductData({ ...newProductData, image: event.target.value })
    };

    const newProductPriceValue = (event) => {
        setNewProductData({ ...newProductData, price: event.target.value })
    };

    const newProductTypeValue = (selectedOption) => {
        setNewProductData({ ...newProductData, type: selectedOption.value })
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
                <input type='text'{...register('name', { required: true })} value={newProductData.name} onChange={newProductNameValue} placeholder='nombre del producto' />
                {errors.email && <p>nombre requerido</p>}
                <input type='url'{...register('image', { required: true })} value={newProductData.image} onChange={newProductImageValue} placeholder='URL de la imagen' />
                {errors.password && <p>URL requerida</p>}
                <input type='text'{...register('price', { required: true })} value={newProductData.price} onChange={newProductPriceValue} placeholder='Precio' />
                {errors.password && <p>Precio requerido</p>}
                <Select
                    onChange={newProductTypeValue}
                    options={options}
                    value={newProductData.type ? { value: newProductData.type, label: newProductData.type } : null}
                />
            </div>
            <input className='btn-form-products-submit-accept' type="submit" value={isEditForm ? 'Editar' : 'Agregar'} />
        </form>
    );

}
FormProducts.propTypes = {
    isEditForm: PropTypes.bool,
    handleAddEditProduct: PropTypes.func,
    newProductData: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.string,
        type: PropTypes.string,
    }),
    setNewProductData: PropTypes.func
}
export default FormProducts