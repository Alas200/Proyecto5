import { useState } from 'react';
import InputNumber from './InputNumber';
import Message from './Message';
import RestartButton from './RestartButton';

function Game() {
  const generarNumeroAleatorio = () => Math.floor(Math.random() * 100) + 1;

  const [numeroSecreto, setNumeroSecreto] = useState(generarNumeroAleatorio);
  const [mensaje, setMensaje] = useState('¡Adivina un número entre 1 y 100!');
  const [intentos, setIntentos] = useState(0);
  const [juegoTerminado, setJuegoTerminado] = useState(false);

  const manejarAdivinanza = (numeroIngresado) => {
    if (juegoTerminado) return;

    setIntentos(prev => prev + 1);

    if (numeroIngresado === numeroSecreto) {
      setMensaje('¡Correcto!  Has ganado.');
      setJuegoTerminado(true);
    } else if (numeroIngresado < numeroSecreto) {
      setMensaje('El número es mayor ');
    } else {
      setMensaje('El número es menor ');
    }
  };

  const reiniciarJuego = () => {
    setNumeroSecreto(generarNumeroAleatorio());
    setMensaje('¡Nuevo juego! Adivina un número entre 1 y 100.');
    setIntentos(0);
    setJuegoTerminado(false);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>Juego: Adivina el Número </h1>
      <Message mensaje={mensaje} intentos={intentos} />
      
      {!juegoTerminado ? (
        <InputNumber onGuess={manejarAdivinanza} />
      ) : null}

      <div style={{ marginTop: '20px' }}>
        <RestartButton onRestart={reiniciarJuego} />
      </div>
    </div>
  );
}

export default Game;