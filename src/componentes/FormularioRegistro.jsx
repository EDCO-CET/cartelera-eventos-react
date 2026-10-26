import { useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import useForm from '../hooks/useForm'


const MySwal = withReactContent(Swal);

const showSuccess = () => {
    MySwal.fire({
        title: '¡Registro exitoso!',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
}

const showError = () => {
    MySwal.fire({
        title: 'Error en el registro',
        icon: 'error',
        confirmButtonText: 'Aceptar'
    });
}


const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const registrarUsuario = (datos) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      datos.email.includes('error') ? reject(new Error('500')) : resolve({ id: 42 });
    }, 1200);
  });


function FormularioRegistro() {
    const { values, errors, handleChange } = useForm({
        nombre: '',
        email: '',
        password: '',
        confirmPassword: ''
    }, {
        nombre: (value) => !value.trim() && 'El nombre es requerido',
        email: (value) => !validateEmail(value) && 'El email es inválido',
        password: (value) => value.length <= 8 && 'La contraseña debe tener al menos 8 caracteres',
        confirmPassword: (value) => value !== values.password && 'Las contraseñas no coinciden'
    });


    const [isSubmitting, setIsSubmitting] = useState(false);

   
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (Object.keys(errors).every((key) => !errors[key])) {
            setIsSubmitting(true);
            try {
                await registrarUsuario(values);
                showSuccess();
            } catch (error) {
                showError();
            } finally {
                setIsSubmitting(false);
            }
    }
};
    
    return (
        <div>
            <form className="formulario-registro" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Nombre" 
                    value={values.nombre}
                    onChange={handleChange}
                    name="nombre"
                />
                {errors.nombre && <span>{errors.nombre}</span>}
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                />
                {errors.email && <span>{errors.email}</span>}
                <input 
                    type="password" 
                    placeholder="Contraseña" 
                    value={values.password}
                    onChange={handleChange}
                    name="password"
                />
                {errors.password && <span>{errors.password}</span>}
                <input 
                    type="password" 
                    placeholder="Confirmar Contraseña" 
                    value={values.confirmPassword}
                    onChange={handleChange}
                    name="confirmPassword"
                />
                {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                <button className="btn btn--primary" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Registrando...' : 'Registrar'}
                </button>
            </form>
        </div>
    );
}

export default FormularioRegistro;