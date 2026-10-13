import { useState } from 'react';

function InputNumber({ onGuess }) {
  const [valor, setValor] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    const numero = parseInt(valor, 10);
    if (!isNaN(numero)) {
      onGuess(numero);
      setValor('');
    }
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Ingresa un número (1-100)"
        min="1"
        max="100"
      />
      <button type="submit">Adivinar</button>
    </form>
  );
}

export default InputNumber;