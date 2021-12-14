import { connect } from 'react-redux'
import { getOrderById, resetUserOrder } from '../../../store/ActionCreator'

const Order = ({userOrder,  getAllOrders, isLoading, resetCurrentOrder, error})=>{
    return(
        <div className ='item_page text-center'>
            <div className = 'item_order'>
                {userOrder ? <>
                        <h3 className = 'my-2'>Your order:</h3>
                        <div className = 'card'>
                            <div className = 'card-body'>
                                {userOrder.order.map((item, index)=>
                                    <div className = 'mb-3' key = {index}>
                                        <h5>{item.title}</h5>
                                        <span>Quantity: {item.count}, </span>
                                        <span>price: {item.price * item.count} {'\u20AC'}</span>
                                    </div>
                                )}
                                <hr />
                                <h5><b>Total: {userOrder.order.reduce((total, item)=>total += item.count * item.price, 0)} {'\u20AC'}</b></h5>
                            </div>
                            <button className = 'btn btn-dark mb-3 w-100'
                                    onClick = {()=>resetCurrentOrder()}>close</button>
                        </div>
                    </>:
                    <>

                        <h3 className = 'my-5'>Type your order number:</h3>
                        <form className = 'input-group mb-2'
                              onSubmit = {(e)=>{
                                  e.preventDefault()
                                  const id = +e.target.orderNumber.value
                                  getAllOrders(id)
                                  e.target.reset()
                              }}  >
                            <input type = 'number' className = 'form-control' placeholder = 'type number of your order' name = 'orderNumber' required/>
                            <button type ='submit' className = 'btn btn-dark'>View my order</button>
                        </form>
                        {error && <h3 className = 'mt-5 text-danger'>{error}, try one more time</h3>}
                    </>}
                <h2>{isLoading ? <div class="spinner-border" role="status"></div> : <></>} </h2>
            </div>
        </div>
    )
}

const mapStateToProps = ({ userOrder, isLoading, error }) => {
    return {
        userOrder,
        isLoading,
        error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllOrders: (id) => dispatch(getOrderById(id)),
        resetCurrentOrder: () => dispatch(resetUserOrder())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);