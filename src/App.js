import { useState } from "react";
import "./App.css";

function App() {
  const [letra, setLetra] = useState("X");
  const [casilla, setCasilla] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  function comprobarGanador() {
    if (casilla[0] === casilla[1] && casilla[1] === casilla[2]) {
      return casilla[0];
    } else if (casilla[3] === casilla[4] && casilla[3] === casilla[5]) {
      return casilla[3];
    } else if (casilla[6] === casilla[7] && casilla[6] === casilla[8]) {
      return casilla[6];
    } else if (casilla[0] === casilla[3] && casilla[0] === casilla[6]) {
      return casilla[0];
    } else if (casilla[1] === casilla[4] && casilla[1] === casilla[7]) {
      return casilla[1];
    } else if (casilla[2] === casilla[5] && casilla[5] === casilla[8]) {
      return casilla[2];
    } else if (casilla[0] === casilla[4] && casilla[0] === casilla[8]) {
      return casilla[0];
    } else if (casilla[2] === casilla[4] && casilla[2] === casilla[6]) {
      return casilla[2];
    }
    return null;
  }

  let ganador = comprobarGanador();

  function mostrarGanador() {
    if (ganador !== null) {
      return <p className="felicitacion">¡Felicidades {ganador} has ganado!</p>;
    }
  }

  function cambiarEstado() {
    letra === "O" ? setLetra("X") : setLetra("O");
  }

  function mostrarCasilla(i) {
    return (
      <button
        className="casilla"
        onClick={() => {
          let array = [...casilla];
          if (casilla[i] === null) {
            array[i] = letra;
            setCasilla(array);
            cambiarEstado();
          }
        }}
      >
        {casilla[i]}
      </button>
    );
  }

  return (
    <div className="pantalla">
      <div>
        <div className="fila">
          {mostrarCasilla(0)}
          {mostrarCasilla(1)}
          {mostrarCasilla(2)}
        </div>
        <div className="fila">
          {mostrarCasilla(3)}
          {mostrarCasilla(4)}
          {mostrarCasilla(5)}
        </div>
        <div className="fila">
          {mostrarCasilla(6)}
          {mostrarCasilla(7)}
          {mostrarCasilla(8)}
        </div>

        <button
          className="partidaNueva"
          onClick={() => {
            setCasilla([null, null, null, null, null, null, null, null, null]);
          }}
        >
          Partida nueva
        </button>
      </div>
      <div>{mostrarGanador()}</div>
    </div>
  );
}

export default App;
