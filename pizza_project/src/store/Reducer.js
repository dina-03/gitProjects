import Types from './ActionType';

const init = {
	isLoading: false,
	menu:[],
	error: null,
	cart: [],
	totalPrice:0,
	orderCount:0,
	searchCategory: '',
	userOrder: null // add order array
}

export default function Reducer(state = init, { type, payload }) {
	switch (type) {
		case Types.getMenu: return _getMenu(state, payload)
		case Types.changeLoader: return _changeLoader(state, payload)
		case Types.error: return _error(state, payload)
		case Types.addItem: return _addItem(state, payload)
		case Types.removeItem: return _removeItem(state, payload)
		case Types.setOrder: return _setOrder(state, payload)
		case Types.clearCart: return _clearCart(state)
		case Types.searchCategory: return {...state, searchCategory: payload}
		case Types.getOrder: return _getOrder(state, payload) // add state for order array
		case Types.resetOrder: return _resetOrder(state, payload) // add state for order array
		default: return state
	}
}

const _resetOrder = (state) => { // add state for order array
	return {
		...state,
		error: null,
		userOrder: null
	}
}

const _getOrder = (state, payload) => { // add state for order array
	return {
		...state,
		userOrder: payload
	}
}

const _getMenu = (state, payload) => {
	return {
		...state,
		error: null,
		menu: [...payload]
	}
}

const _changeLoader = (state, payload) => {
	return {
		...state,
		isLoading: payload
	}
}

const _error = (state, payload) => {
	return {
		...state,
		error: payload
	}
}

const _addItem = (state, payload) => {
	const cndIndex = state.cart.findIndex((item) => item.id === payload)
	if (cndIndex >= 0) {
		const itemInCart = state.cart[cndIndex]
		const newItem = {
			...itemInCart,
			count: itemInCart.count + 1
		}
		return {
			...state,
			cart: [
				...state.cart.slice(0, cndIndex),
				newItem,
				...state.cart.slice(cndIndex + 1)
			],
			totalPrice: state.totalPrice + newItem.price
		}
	}
	const item = state.menu.find(el => el.id === payload)
	const newItem = {
		title: item.title,
		price: item.price,
		id: item.id,
		url: item.url,
		count: 1
	}
	return {
		...state,
		cart: [...state.cart, newItem],
		totalPrice: state.totalPrice + newItem.price
	}
}

const _removeItem = (state, payload) => {
	const index = state.cart.findIndex((el) => el.id === payload)
	const newCart = [...state.cart]
	const itemToRemove = { ...newCart[index] }
	if (itemToRemove.count > 1) {
		itemToRemove.count--
		newCart[index] = itemToRemove
	} else {
		newCart.splice(index, 1)
	}
	return {
		...state,
		cart: [...newCart],
		totalPrice: state.totalPrice - itemToRemove.price
	}
}

const _setOrder = (state, payload) => {
	return {
		...state,
		error: null,
		orderCount: payload,
		isLoading: false
	}
}

const _clearCart = (state) => {
	return {
		...state,
		cart: [],
		totalPrice: 0
	}
}
