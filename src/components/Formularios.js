import React, { useState } from 'react';
/* const [nombre, setNombre] = useState(""); */

export default function formularios() {
    return (
        <>
            <h2>Formularios</h2>
            <form>
                <label htmlFor="nombre" >Nombre :</label>
                <input type="text" id='nombre' name='nombre' />
            </form>

        </>
    );
}