
import { NavLink } from "react-router"
import { useAuth } from "../hooks/useAuth"

function Header() {
    const { user, logout, hasRole } = useAuth();
    return (
        <header className="header">
            <h1>Cartelera Eventos</h1>
            <nav>
                <ul className="nav-list">
                    <li><NavLink to="/">Inicio</NavLink></li>
                    {user && hasRole('admin') && <li><NavLink to="/admin">Admin</NavLink></li>}
                    {user && <li>{user.email}</li>}
                    {!user && <li><NavLink to="/login">Iniciar sesión</NavLink></li>}
                    {user && <li><button className="btn btn--secondary" onClick={logout}>Cerrar sesión</button></li>}
                </ul>
            </nav>
        </header>
    )
}

export default Header