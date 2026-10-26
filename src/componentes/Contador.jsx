import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);
  const [ultimoCambio, setUltimoCambio] = useState(null);

  const incrementar =  () => setContador(prev => prev + 1);
  const decrementar =  () => setContador(prev => prev - 1);
  const reset =  () => setContador(0);

  return (
    <div>
      <p>Has hecho clic {contador} veces</p>
      {contador < 0 && (
        <p>¡El contador es negativo!</p>
      )}
      <div style={{ display: 'flex', gap: '3px' }}>
        <button className="btn btn--primary" onClick={incrementar}>
            Incrementar
        </button>
        <button className="btn btn--primary" onClick={decrementar}>
            Decrementar
        </button>
        <button className="btn btn--accent" onClick={reset}>
            Reset
        </button>
      </div>
    </div>
  );
}

export default Contador;