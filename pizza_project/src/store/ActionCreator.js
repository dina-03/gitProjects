import Types from './ActionType';
/* import axios from 'axios' */
import { addOrderItem, getAllMenus, getAllOrders } from '../service/menuService';

/* const client = axios.create({
    baseURL: "http://localhost:3000"
}) */

/* export const getMenu = () => {
    return (dispatch) => {
        dispatch({ type: Types.changeLoader, payload: true })
        setTimeout(() => {
            client.get('/menu')
                .then(response => {
                    dispatch({ type: Types.getMenu, payload: response.data })
                }).catch((error) => {
                    dispatch({ type: Types.error, payload: error.message })
                }).finally(() => {
                    dispatch({ type: Types.changeLoader, payload: false })
                })
        }, 1500)
    }
} */

export const getMenu = () => {
    return async dispatch => {
        dispatch({ type: Types.changeLoader, payload: true })
        try {
            const response = await getAllMenus()
            console.log(response.menu)
            dispatch({ type: Types.getMenu, payload: response.menu })
        } catch (error) {
            dispatch({ type: Types.error, payload: error.message })
        }
        dispatch({ type: Types.changeLoader, payload: false })
    }
}

/* export const setOrder = (order) => {
    let id = 0
    const curOrder = {
        id: id++,
        order
    }
    return (dispatch) => {
        client.post('/orders', JSON.stringify(curOrder), { headers: { 'Content-Type': 'application/json' } })
            .then(({ data }) => {
                dispatch({ type: Types.setOrder, payload: data.id })
            }).catch((error) => {
                dispatch({ type: Types.error, payload: error.message })
            })
    }
} */

export const setOrder = (order) => {
    return async dispatch => {
        dispatch({ type: Types.changeLoader, payload: true })
        try {
            const responseGet = await getAllOrders()
            const curOrder = {
                id: responseGet.orders.length + 1,
                order
            }
            const response = await addOrderItem(curOrder)
            console.log(response)
            dispatch({ type: Types.setOrder, payload: curOrder.id })
        } catch (error) {
            dispatch({ type: Types.error, payload: error.message })
        }
        dispatch({ type: Types.changeLoader, payload: false })
    }
}

// add new Actions - start //
export const getOrderById = (id) => {
    return async dispatch => {
        dispatch({ type: Types.changeLoader, payload: true })
        try {
            const response = await getAllOrders()
            const allOrders = response.orders
            const userOrder = allOrders.find(order => order.id === id)
            if (userOrder) {
                dispatch({ type: Types.getOrder, payload: userOrder })
            } else {
                throw new Error('Wrong order number')
            }
        } catch (error) {
            dispatch({ type: Types.error, payload: error.message })
        }
        dispatch({ type: Types.changeLoader, payload: false })
    }
}
export const resetUserOrder = () => {
    return {
        type: Types.resetOrder
    }
}
// add new Actions End - end //

export const addItemToCart = (id) => {
    return {
        type: Types.addItem,
        payload: id
    }
}

export const removeItemFromCart = (id) => {
    return {
        type: Types.removeItem,
        payload: id
    }
}

export const clearCart = () => {
    return {
        type: Types.clearCart
    }
}

export const searchCategory = (value) => {
    return {
        type: Types.searchCategory,
        payload: value
    }
}