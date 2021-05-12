import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

function Carrito({carrito}) {

    return (
        <div>
            <h3>Carrito de compras</h3>
            {
                carrito.length > 0 ?

                    carrito.map((producto, id) => (
                        <Producto key={producto.id}>
                            <NombreProducto>
                                {producto.nombre}
                            </NombreProducto>
                            Cantidad: {producto.cantidad}
                        </Producto>
                    ))
                : <p>No hay productos en el carrito</p>
            }
        </div>
    );
}

Carrito.propTypes = {
    carrito: PropTypes.array
}

const Producto = styled.div`
    padding: 10px;
    border-bottom: 1px solid #ebebf3;
    font-size: 14px;
`;

const NombreProducto = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: #000;
`;

const mapStateToProps = (state) =>{
    return {
        carrito: state.carrito
    }
}

export default connect(mapStateToProps)(Carrito);