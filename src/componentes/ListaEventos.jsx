import Tarjeta from "./Tarjeta"


function ListaEventos({ eventos }) {
    return (
        <div>
            <div className="events-container">
                {eventos.map((evento) => (
                    <Tarjeta key={evento.id} evento={evento} />
                ))}
            </div>
        </div>
    )
}

export default ListaEventos