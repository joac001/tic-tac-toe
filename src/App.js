import { useState } from 'react';
import './style/App.css';

function App() {

  const [values, setValues] = useState([null, null, null, null, null, null, null, null, null]);
  const [turn, setTurn] = useState(0);
  const reset = [null, null, null, null, null, null, null, null, null];

  const renderPlayed = (idx) => {
    return values[idx] === null
      ? <div className="empty"></div>
      : values[idx] === 0
        ? <div className="circle"></div>
        : <div className="cross"><span>X</span></div>
  }

  const play = (idx) => {
    const newValues = values.map((e, i) => i === idx ? getXorO() : values.at(i));
    turn === 0 ? setTurn(1) : setTurn(0);
    setValues(newValues);
  }
  const getXorO = () => {
    return turn === 0 ? 0 : 1;
  }

  return (
    <div className="App">

      <div class="my-table">
        {
          values.map((e, idx) =>
            <div
              key={idx}

              className={"cell idx-" + idx}
              onClick={() => { values.at(idx) === null ? play(idx) : alert('You cant play there.'); }}
            >
              {renderPlayed(idx)}
            </div>
          )}
      </div>

      <button className='btn btn-secondary btn-restart' onClick={() => setValues(reset)} hidden={!(values.includes(0) || values.includes(1))} >
        <span class="material-symbols-outlined">
          replay
        </span>
        Restart
      </button>

    </div >
  );
}

export default App;
