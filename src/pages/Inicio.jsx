import Hero from "../componentes/Hero"
import ListaEventos from "../componentes/ListaEventos"
import FormularioRegistro from "../componentes/FormularioRegistro"
import { useEffect, useState } from "react"
import { useApi } from "../hooks/useApi"


function Inicio() {
    
    const API_URL = 'https://6acffa5d03feaa52b21efe53.mockapi.io/api/v1';
    const { loading, error, data: eventos } = useApi(API_URL + '/eventos');


    return (
        <>
            <Hero titulo="Bienvenido a la Cartelera de Eventos"  descripcion="Descubre los mejores eventos en tu ciudad"/>
            <div className="layout">
                <aside className="aside aside--featured">
                <h2>Eventos Destacados</h2>
                {!loading && !error && <ListaEventos eventos={eventos.filter(evento => evento.destacado)} />}
                </aside>
                <main id="home" className="main">
                <section id="events">
                    <h2>Proximos Eventos</h2>
                    {loading && <p>Cargando eventos destacados...</p>}
                    {error && <p>Error: {error}</p>}
                    {eventos && eventos.length === 0 && <p>No hay eventos disponibles</p>}
                    {!loading && !error && eventos.length > 0 && <ListaEventos eventos={eventos} />}
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