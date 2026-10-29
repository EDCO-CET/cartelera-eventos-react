import Hero from "../componentes/Hero"
import ListaEventos from "../componentes/ListaEventos"
import FormularioRegistro from "../componentes/FormularioRegistro"
import { useEffect, useState } from "react"



function Inicio() {

    const [eventos, setEventos] = useState([]);

    const API_URL = 'https://6acffa5d03feaa52b21efe53.mockapi.io/api/v1';
    useEffect(() => {
        fetch(API_URL + '/eventos')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    console.log('Eventos cargados:', data)
                    setEventos(data);
                }
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <Hero titulo="Bienvenido a la Cartelera de Eventos"  descripcion="Descubre los mejores eventos en tu ciudad"/>
            <div className="layout">
                <aside className="aside aside--featured">
                <h2>Eventos Destacados</h2>
                <ListaEventos eventos={eventos.filter(evento => evento.destacado)} />
                </aside>
                <main id="home" className="main">
                <section id="events">
                    <h2>Proximos Eventos</h2>
                    <ListaEventos eventos={eventos} />
                </section>
                <section>
                    <h2>Formulario de Registro</h2>
                    <FormularioRegistro />
                </section>
                </main>
                <aside className="aside aside--info">
                <h2>Info util</h2>
                <section>
                    <h3>Horarios</h3>
                    <p>Lunes a viernes de 7pm a 9pm</p>
                </section>
                </aside>
            </div>
        </>
    )
}

export default Inicio