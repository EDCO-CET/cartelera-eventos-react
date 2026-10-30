import { useState } from "react"
import { Navigate, useLocation, useNavigate } from "react-router"
import { useAuth } from "../hooks/useAuth"
import Hero from "../componentes/Hero"

/*
  Página "/login". Si una ruta protegida nos manda aquí con state.desde, al entrar
  volvemos allá. Si el usuario llegó directo, no hay state: vamos a "/admin".
*/
function Login() {
    const { user, login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const destino = location.state?.desde ?? '/admin';

    // Lo que se escribe es estado LOCAL: solo este formulario lo necesita
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Ya hay sesión (por ejemplo, volvió a /login con "atrás"): no mostramos el formulario
    if (user) {
        return <Navigate to={destino} replace />
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            await login(email, password);
            // replace: /login no queda en el historial
            navigate(destino, { replace: true });
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Hero titulo="Iniciar sesión" texto="Solo los administradores pueden agregar y editar eventos." />
            <div className="layout">
                <main className="main">
                    <section id="admin">
                        <form className="form" onSubmit={handleSubmit}>
                            <fieldset className="form-group" disabled={isLoading}>
                                <legend>Tus datos</legend>

                                <div className="form-field form-field--full">
                                    <label htmlFor="login-email">Email</label>
                                    <input
                                        id="login-email"
                                        type="email"
                                        autoComplete="username"
                                        required
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </div>

                                <div className="form-field form-field--full">
                                    <label htmlFor="login-password">Contraseña</label>
                                    <input
                                        id="login-password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>
                            </fieldset>

                            {error && <p className="form-mensaje form-mensaje--error" role="alert">{error}</p>}

                            <div className="form-botones">
                                <button className="btn btn--accent form-submit" type="submit" disabled={isLoading}>
                                    {isLoading ? 'Ingresando...' : 'Ingresar'}
                                </button>
                            </div>
                        </form>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Login
