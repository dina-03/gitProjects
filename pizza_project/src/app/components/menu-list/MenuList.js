import './MenuList.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMenu, addItemToCart } from './../../../store/ActionCreator';
import Loader from './../loader/Loader';
import Food from './../../img/big-food.jpg'
import { SuccessButton } from '../button/Button';
/* import Order from '../order/Order'; */


function MenuList({ menu, isLoading, error, getData, addToCart, searchCategory }) {
  let filteredMenus
	const tempMenusArr = [...menu]
	if (searchCategory.trim() !== '') {
    filteredMenus = tempMenusArr.filter(menu => menu.category.toLowerCase().startsWith(searchCategory))
    if (menu.length === 0) { getData() }		
	} else {
		filteredMenus = tempMenusArr
	}
  return (
    <>{isLoading ? <Loader /> : <>
      {filteredMenus.length === 0 ? <div>
        <h1 className='menu__header'>food for every taste</h1>
        <img src={Food} className='home__img' alt='food' />
        <button className='load__btn' onClick={getData}>View our menu</button>
      </div> :
        <>
          <h1 className='menu__header'>menu</h1>
          <ul className='menu__list'>
            {
              filteredMenus.map(item =>
                <li className='menu__item' key={item.id}>
                  <Link to={`/menu/${item.id}`}>
                    <div className='menu__title'>{item.title}</div>
                    <img className='menu__img' src={item.url} alt={item.title} />
                    <div className='menu__category'>Category: <span>{item.category}</span></div>
                    <div className='menu__price'>Price: <span>{item.price} {'\u20AC'}</span></div>
                    <SuccessButton menu onClick={(e) => {
                      e.preventDefault()
                      addToCart(item.id)}}>Add to cart</SuccessButton>
                    <span className={`menu__category_Img ${item.category}`}></span>
                  </Link>
                </li>
              )
            }
          </ul>
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </>
      }
    </>}
    </>
  )
};

const mapStateToProps = ({ menu, isLoading, error, searchCategory }) => {
  return {
    menu,
    isLoading,
    error, 
    searchCategory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(getMenu()),
    addToCart: (id) => dispatch(addItemToCart(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MenuList);