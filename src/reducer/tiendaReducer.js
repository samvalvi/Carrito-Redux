const estadoInicial = {
    productos: [
        { id: 1, nombre: 'Producto A' },
        { id: 2, nombre: 'Producto B' },
        { id: 3, nombre: 'Producto C' },
        { id: 4, nombre: 'Producto D' }
    ],
    carrito: []
}

const reducer = (state= estadoInicial, accion) => {
    switch(accion.type){
        case 'AGREGAR_AL_CARRITO':
            const {nombre, idProducto} = accion;

            if (state.carrito.length === 0){
                return {
                    ...state,
                    carrito: [{id: idProducto, nombre: nombre, cantidad: 1}]
                }
            }else{
                const nuevoCarrito = [...state.carrito]

                const existe = nuevoCarrito.filter(item => {
                    return item.id === idProducto
                }).length > 0

                if(existe){
                    nuevoCarrito.forEach((item, index) => {
                        if(item.id === idProducto){
                            const cantidad = nuevoCarrito[index].cantidad;
                            nuevoCarrito[index] = {
                                id: idProducto,
                                nombre: nombre,
                                cantidad: cantidad + 1
                            }
                        }
                    });
                }else{
                    nuevoCarrito.push({
                        id: idProducto,
                        nombre: nombre,
                        cantidad: 1
                    })
                }

                return {
                    ...state, carrito: nuevoCarrito
                }
            }

        default:
            return state;
    }
}

export default reducer;