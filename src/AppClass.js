import React from 'react';

class AppClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
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
        }

        this.nameRef = React.createRef();
    }

    /* state = {
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
    } */

    cambiarNombre = () => {
        this.setState({
            name: 'Luis Javier'
        })
    }

    componentDidMount(){
        // carga o renderiza el componente por primera vez
        console.log("Componente Cargado...");
    }

    componentDidUpdate(){
        console.log("Componente Actualizado...");
    }

    componentWillUnmount(){
        // elimina o desrenderiza el componente
        console.log("Componente Eliminado...");
    }

    render() {
        return (
            <>
                <h1>Hola Mundo</h1>
                <h3>{this.state.name} {this.state.lastname}</h3>
                {/* <button onClick={() => {
                    this.setState({
                        name: 'Luis Javier'
                    })
                }}>
                    Cambiar Nombre
                </button> */}

                <button onClick={this.cambiarNombre}>
                    Cambiar Nombre
                </button>
            </>
        )
    }
}

export default AppClass;