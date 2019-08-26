import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Products.css'
import {toggleItemToCart} from "../../actions/products-action";

class Products extends Component {

    renderCart = ({name, price, isAddedToCart,id}) => {
        return (
            <div className="card" key={id}>
                <h4>{name}</h4>
                <h4>{price}</h4>
                <h4>is added : {isAddedToCart ? "true" : "false"}</h4>
                <button onClick={this.hadleAddedCart.bind(null,id)}>add to cart</button>

            </div>
        )
    }
    hadleAddedCart = (id) =>{
        const {toggleItemToCart} = this.props;

        toggleItemToCart(id);
    }

    render() {
        const {product} = this.props;
        return (
            <div className="product-wrapper">
                {product.map(this.renderCart)}
            </div>
        );
    }
}
const mapStateToPrors = ({product}) =>{
    return{product};
};
const mapDispatchToProps = (dispatch) =>{
    return{
        toggleItemToCart : (id)=>dispatch(toggleItemToCart(id))
    };
};
export default connect(mapStateToPrors,mapDispatchToProps)(Products);