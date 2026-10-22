import { textoCupos, formatearPrecio } from "../utils/formato";

function Tarjeta({ evento }) {
    const { nombre, imagen, alt, titulo, descripcion, cupos, precio } = evento;
    return (
        <article className="card">
            <div className="card-media"> 
                <img className="card-image" src={imagen} alt={alt} />
                <span className="card-tag">Ver detalles</span>
            </div>
             <div className="card-body">
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
                <small className="card-stock">{textoCupos(cupos)}</small>
            </div>
             <div className="card-actions">
                <span className="card-price">{formatearPrecio(precio)}</span>
                <button className="btn btn--accent">Comprar Ticket</button>
            </div>
        </article>
    )
}

export default Tarjeta