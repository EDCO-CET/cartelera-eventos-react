
import { NavLink } from "react-router"

function Header() {
    return (
        <header className="header">
            <h1>Cartelera Eventos</h1>
            <nav>
                <ul className="nav-list">
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/admin">Admin</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header