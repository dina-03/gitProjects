import './AppHeader.css';
import cartIcon from './shopping-cart-solid.svg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Search from '../search/Search';


const AppHeader = ({ totalPrice }) => {

    return (
        <header className="header">
            <Search />
            <Link to='/' className='header__link'>Menu</Link>
            <Link to='/cart' className='header__link'>
                <img className='header__cart' src={cartIcon} alt='cart' />
                Total: {totalPrice} {'\u20AC'}
            </Link>
            <Link to='/order' className='header__link'>My order</Link>
        </header>
    )
};

const mapStateToProps = ({ totalPrice }) => {
    return {
        totalPrice
    }
}

export default connect(mapStateToProps)(AppHeader);