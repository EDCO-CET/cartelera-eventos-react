import { AuthContext } from "./AuthContext";
import { useState, useEffect } from "react";
import { cerrarSesion, iniciarSesion , escucharSesion, obtenerPerfil } from "../services/api";



function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const cancelar = escucharSesion((session) => {
            if (!session) {
               setUser(null);
               return;
            }
            obtenerPerfil(session.user).then((perfil) => {
                setUser(perfil);
            }).catch((error) => {
                console.error('Error al obtener el perfil:', error.message);
                setUser(null);
            });
        });
        return cancelar;
    }, []);

    const login = async (email, password) => {
        const datos = await iniciarSesion(email, password);
        setUser(datos);
    };

    const logout = () => {
        setUser(null);
        cerrarSesion().catch((error) => {
            console.error('Error al cerrar sesión:', error.message);
        });
        // TODO: llamar a la API para cerrar sesión
    };

    const hasRole = (rol) => {
        return user?.rol === rol;
    };
    
    return (
        <AuthContext.Provider value={{ user, login, logout, hasRole }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;