

import { useAuth } from "../hooks/useAuth"
import { Navigate, Outlet } from "react-router"
import { Link } from "react-router"
import Hero from "./Hero"

export function RutaProtegida({ role }) {
    const { user, hasRole } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />
    }

    if (!hasRole(role)) {
        return (
            <>
                <Hero titulo="Acceso denegado" texto="No tienes permisos para acceder a esta página"/>
                <Link className="btn btn-accent hero-cta" to="/">Volver al inicio</Link>
            </>
        )
    }

    return <Outlet />;
}