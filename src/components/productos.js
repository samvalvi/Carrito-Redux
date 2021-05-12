import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'


function Productos({productos, agregarAlCarrito}) {

    return (
        <ContenedorProductos>
            {
                productos.map((producto, id) => (
                    <Producto key={id}>
                        <p>{producto.nombre}</p>
                        <Boton onClick={()=> agregarAlCarrito(producto.id, producto.nombre)}>Agregar</Boton>
                    </Producto>
                ))
            }
        </ContenedorProductos>
    );
}

Productos.propTypes = {
    productos: PropTypes.array,
    agregarAlCarrito: PropTypes.func
}

const ContenedorProductos = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px 0;
`;

const Producto =  styled.div`
    padding: 20px;
    border: 1px solid #ebeef3;
    border-radius: 5px;
    text-align: center;
 
    p {
        margin-bottom: 10px;
        font-weight: bold;
    }
`;

const Boton = styled.button`
    border: none;
    background: #1c85e8;
    color: #fff;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    width: 100%;
    border-radius: 3px;
    transition: .3s ease all;
 
    &:hover {
        background: #1c6ab9;
    }
`;

//Toma el estado y lo pasa como props
const mapStateToProps = (state) => {
    return {
        productos: state.productos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        agregarAlCarrito: (idProducto, nombre)=> {
            dispatch(
                {
                    type:'AGREGAR_AL_CARRITO',
                    idProducto: idProducto,
                    nombre: nombre
                }
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Productos);