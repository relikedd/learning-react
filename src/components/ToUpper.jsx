import React, { useState } from 'react'

const ToUpper = () => {

    const [texto, setTexto] = useState('')

    const toUpper = () => {
        setTexto(texto.toUpperCase())
    }

    const toLower = () => {
        setTexto(texto.toLowerCase())
    }

    return (
        <div>
            <h1>Texto a convertir</h1>
            <input type="text" onChange={(e) => setTexto(e.target.value)} />
            <br />
            <button onClick={toUpper}>Convertir a Mayusculas</button>
            <br />
            <button onClick={toLower}>Convertir a minusculas</button>
            <h1>{texto}</h1>
        </div>
    )
}

export default ToUpper
