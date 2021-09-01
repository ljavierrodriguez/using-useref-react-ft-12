import React, { useRef, useState } from 'react';

function App(props) {

    const [musica, setMusica] = useState([
        { "id":1, "category":"game", "name":"Mario Castle", "url":"files/mario/songs/castle.mp3" },
        { "id":2, "category":"game", "name":"Mario Star", "url":"files/mario/songs/hurry-starman.mp3"},
        { "id":3, "category":"game", "name":"Mario Overworld", "url":"files/mario/songs/overworld.mp3"}
    ])

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");

    const [state, setState] = useState({
        persona: {
            name: '',
            lastname: ''
        },
        student: {
            name: '',
            lastname: ''
        },
        name: 'Luis',
        lastname: 'Rodriguez',
        user: []
    });

    let rutRef = useRef();
    let addressRef = useRef();


    const handleSubmit = e => {
        e.preventDefault()

        console.log(rutRef.value);
        console.log(addressRef.value);
        console.log(addressRef.current);
        addressRef.value = "";

    }

    return (
        <>
            <h1>Hola Mundo React</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange={e => setName(e.target.value)}
                    placeholder="Insert name"
                />
                <br />
                <input
                    type="text"
                    name="lastname"
                    onChange={e => setLastname(e.target.value)}
                    placeholder="Insert lastname"
                />
                <br />
                <input
                    ref={ele => rutRef = ele}
                    type="text"
                    name="rut"
                    placeholder="Insert rut"
                />

                <textarea name="address" id="address" cols="30" rows="4" ref={ele => addressRef = ele}></textarea>
                <button>
                    Mostrar rut
                </button>

                <button onClick={() => {
                    console.log(rutRef.value);
                }}>
                    Segundo Mostrar
                </button>
            </form>
        </>
    );
}

export default App;