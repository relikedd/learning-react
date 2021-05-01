import React, { useState } from 'react'

const ToUpper = () => {

    const [texto, setTexto] = useState('')
    var cambio = ""

    const toUpper = () => {
        cambio = texto.toUpperCase()
        // console.log(cambio);

        setTexto(cambio)
        console.log(texto);
    }

    const toLower = () => {
        cambio = texto.toLowerCase()
        setTexto(cambio)
        console.log(texto);
    }

    // console.log(texto);

    return (
        <div>
            <h1>Texto a convertir</h1>
            <input type="text" onChange={(e) => setTexto(e.target.value)} placeholder={cambio} />
            <br/>
            <button onClick={toUpper}>Convertir a Mayusculas</button>
            <br/>
            <button onClick={toLower}>Convertir a minusculas</button>
            <h1>{cambio}</h1>
            <h1>{texto}</h1>
        </div>
    )
}

export default ToUpper
