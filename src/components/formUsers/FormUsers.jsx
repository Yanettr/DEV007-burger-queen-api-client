import { useForm } from 'react-hook-form';
import Select from "react-select";
import './FormUsers.css'
import { PropTypes } from 'prop-types'

const FormUsers = ({ isEditForm, handleAddEdit, newUserData, setNewUserData }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    //fn que obtiene el valor de email proporcionado en el form
    const newUserEmailValue = (event) => {
        setNewUserData({ ...newUserData, email: event.target.value })
    };
    //fn que obtiene el valor del password del formulario
    const newUserPasswordValue = (event) => {
        setNewUserData({ ...newUserData, password: event.target.value })
    };

    //  fn que obtiene los valores de las opciones seleccionadas
    const newUserRoleValue = (selectedOption) => {
        setNewUserData({ ...newUserData, role: selectedOption.value })
    };
    //se crean las constantes para el select de los roles
    const options = [
        { value: 'waiter', label: 'Mesera(o)' },
        { value: 'chef', label: 'Chef' },
        { value: 'admin', label: 'Admin' },
    ];

    return (
        <form className='container-form' onSubmit={handleSubmit((data) => {
            console.log('form submit data', data);
            handleAddEdit(newUserData);
        })}>
            <input type='email'{...register('email', { required: true })} value={newUserData.email} onChange={newUserEmailValue} placeholder='Correo electrónico' />
            {errors.email && <p>Email requerido</p>}
            <input type='password'{...register('password', { required: true })} value={newUserData.password} onChange={newUserPasswordValue} placeholder='Contraseña' />
            {errors.password && <p>Contraseña requerida</p>}
            <Select
                onChange={newUserRoleValue}
                options={options}
                value={newUserData.role ? { value: newUserData.role, label: newUserData.role } : null}
            />
            <input className='btn-form-submit-accept' type="submit" value={isEditForm ? 'Editar' : 'Agregar'} />
        </form>
    );

}
FormUsers.propTypes = {
    isEditForm: PropTypes.bool,
    handleAddEdit: PropTypes.func,
    newUserData: PropTypes.shape({
        email: PropTypes.string,
        password: PropTypes.string,
        role: PropTypes.string,
    }),
    setNewUserData: PropTypes.func
}
export default FormUsers