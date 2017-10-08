import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getProducts, getProductTypes, getProductPrice} from '../actions';

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prices: []
        };
        this.changeType = this.changeType.bind(this);
        this.createItem = this.createItem.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(getProductTypes);
        this.props.dispatch(getProducts());
        getProductPrice()
            .then((prices) => this.setState({prices}));
    }

    changeType(activeType) {
        this.setState({activeType});
    }

    createItem(data) {

        let {item, index, itemPrice} = data;
        return (
            <div className={(index + 1) % 4 === 0 ? 'catalog__item catalog__item_last' : 'catalog__item'} key={item.id}>
                <div className="catalog__image">
                    <div className="catalog__image-wrapper">
                        <img className="catalog__image-content" src={item.image}/>
                    </div>
                </div>
                {item.params && item.params.new && <div className="catalog__item-new">new</div>}
                <p className="catalog__item-title">{item.name}</p>
                <p className={itemPrice.activePrice ? 'catalog__text catalog__text_crossed-out' : 'catalog__text'}>{`${itemPrice.price}$`}</p>
                {itemPrice.activePrice &&
                <p className="catalog__text catalog__text_active">{`${itemPrice.activePrice}$`}</p>}
            </div>
        );
    }

    render() {
        if (!this.props.products && !this.props.productTypes && !this.state.prices.length) {
            return null;
        }

        let {products, productTypes} = this.props;

        return (
            <div className="catalog">
                <div className="container">
                    <p className="catalog__title">Catalog</p>
                    <ul className="catalog__menu">
                        <li onClick={() => this.changeType('')} className="catalog__menu-item">All</li>
                        {productTypes.map((item) => {
                            return <li onClick={() => this.changeType(item)}
                                       className={this.state.activeType === item ? 'catalog__menu-item catalog__menu-item_current' : 'catalog__menu-item'}
                                       key={item}>{item}</li>
                        })}
                    </ul>
                    <div className="catalog__content clearfix">
                        {products.map((item, index) => {
                            let itemPrice = this.state.prices.find((price) => price.id === item.id);

                            if (this.state.activeType) {
                                return itemPrice && item.type === this.state.activeType && this.createItem({
                                    item,
                                    index,
                                    itemPrice
                                });
                            }
                            return itemPrice && this.createItem({item, index, itemPrice});
                        })}
                    </div>
                    <div className="catalog__button">Load More...</div>
                </div>
            </div>
        )
    }
}

Catalog.propTypes = {
    dispatch: PropTypes.func,
    products: PropTypes.array,
    productTypes: PropTypes.array,
};

export default connect((state) => ({
    productTypes: state.productTypes,
    products: state.products,
}))(Catalog);