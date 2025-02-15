import { connect } from 'react-redux'

import { addItem, 
         removeItem,
         clearItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.component.scss';

const CheckoutItem = ({cartItem, addItem, removeItem, clearItemFromCart}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' 
                    onClick={() => removeItem(cartItem)}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' 
                    onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div 
                className='remove-button' 
                onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispathToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearItemFromCart: item => dispatch(clearItemFromCart(item))
})

export default connect(
    null,
    mapDispathToProps
)(CheckoutItem);