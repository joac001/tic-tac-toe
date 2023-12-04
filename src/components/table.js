import { useState } from 'react';

import '../style/table.css';

export default function Table() {
    const emptyValues = [null, null, null, null, null, null, null, null, null];

    const [values, setValues] = useState(emptyValues);
    const [turn, setTurn] = useState(0);

    function renderPlayed(idx) {
        return values[idx] === null
            ? <div className="playable empty"></div>
            : values[idx] === 0
                ? <div className="playable circle"></div>
                : <div className="playable cross">X</div>
    }

    function play(idx) {
        if (values.idx === null) {

        }
        const newValues = values.map((e, i) => i === idx ? getXorO() : values.at(i));
        turn === 0 ? setTurn(1) : setTurn(0);
        setValues(newValues);
    }
    function getXorO() {
        return turn === 0 ? 0 : 1;
    }

    return (
        <div className="table">

            <div className="my-table">
                {
                    values.map((e, idx) =>
                        <div
                            key={idx}

                            className={"cell idx-" + idx}
                            onClick={() => { values.at(idx) === null ? play(idx) : alert('You cant play there.'); }}
                        >
                            {renderPlayed(idx)}
                        </div>
                    )
                }
            </div>

            <button className='btn btn-secondary btn-restart' onClick={() => setValues(emptyValues)} hidden={!(values.includes(0) || values.includes(1))} >
                <span className="material-symbols-outlined">
                    replay
                </span>
                Restart
            </button>

        </div >
    );
}