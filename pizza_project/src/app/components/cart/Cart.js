import React from 'react';
import './Cart.css';
import { connect } from 'react-redux'
import { clearCart, removeItemFromCart, setOrder } from '../../../store/ActionCreator';
import { Button, SuccessButton } from '../button/Button';
import { useState } from 'react';

const Cart = ({ cart, deleteFromCart, order, clear, totalPrice, orderCount, isLoading }) => {

    const [confirmed, setConfirmed] = useState(false);

    return (
        cart.length === 0 ? <div className='cart__title'>
                Cart is empty
            </div>
            :
            <div className='cart'>
                <div className='cart__title'>Your order: </div>
                <div className='cart__list'>
                    {
                        cart.map(item => {
                            const { price, title, url, id, count } = item
                            return (
                                <div key={id} className='cart__item'>
                                    <img src={url} className='cart__item-img' alt={title} />
                                    <div className='cart__item-title'>{title}</div>
                                    <div className='cart__item-price'>{count}</div>
                                    <div className='cart__item-price'>{price * count}</div>
                                    <div className='cart__close'
                                         onClick={() => deleteFromCart(id)}><span className="close__icon">&times;</span></div>
                                </div>
                            )
                        })
                    }
                </div>
                <Button cart data-bs-toggle="modal" data-bs-target="#order">Order</Button>

                <div id="order" class="modal hide fade in" data-bs-keyboard="false" data-bs-backdrop="static">
                    <div className="modal-dialog">
                        {!confirmed ?
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Please check and confirm your order:</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    {cart.map((item) =>
                                        <div key={item.id}>
                                            <p>{item.title}</p>
                                            <p>Quantity: {item.count} / Price: {item.price * item.count} {'\u20AC'}</p>
                                        </div>
                                    )}
                                    <hr />
                                    <p>Total: {totalPrice}</p>
                                </div>
                                <div className="modal-footer">
                                    <Button aria-label="Close" data-bs-dismiss="modal">Back to Cart</Button>
                                    <SuccessButton onClick={() => {
                                        order(generateOrder(cart))
                                        setConfirmed(true)
                                    }} >Confirm Order</SuccessButton>
                                </div>
                            </div> :
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Thank's for your order!</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"
                                            onClick={clear}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <h2>Your order &#8470;: {isLoading ? <div class="spinner-border" role="status"></div> : orderCount} </h2>
                                    {/* Add spinner */}
                                </div>
                            </div>}
                    </div>
                </div>
            </div>
    );
};

const mapStateToProps = ({ cart, totalPrice, orderCount, isLoading }) => {
    return {
        cart,
        totalPrice,
        orderCount,
        isLoading, // for adding spinner
    }
}


const mapDispatchToProps = dispatch => {
    return {
        deleteFromCart: (id) => dispatch(removeItemFromCart(id)),
        order: (order) => dispatch(setOrder(order)),
        clear: () => dispatch(clearCart())
    }
}

const generateOrder = (cart) => {
    const order = cart.map(item => {
        return {
            title: item.title,
            count: item.count,
            price: item.price
        }
    })
    return order
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);