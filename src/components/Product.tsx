import { GiCancel } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { increaseQuantity, resetQuantity } from '../store/productsSlice';
import { IProduct } from '../types/types';
import { FC, memo } from 'react';

interface ProductsProps {
    product: IProduct;
}

const Product: FC<ProductsProps> = memo(({ product }) => {
    const dispatch = useDispatch();

    return (
        <div className="product__card">
            <div className="product__img">
                <img src={product.img} alt={product.name} />
            </div>
            <div className="product__info">
                <h3 className="product__name">{product.name}</h3>
                <p className="product__description">{product.description}</p>
                <div className="product__actions">
                    <h3 className="product__actions-title">Quantity: {product.quantity}</h3>
                    <div className="product__actions-btns">
                        <button className="product__cancel-btn" onClick={() => dispatch(resetQuantity(product.id))}>
                            <GiCancel style={{ fontSize: '20px', paddingTop: '3px' }} />
                        </button>
                        <button className="product__price" onClick={() => dispatch(increaseQuantity(product.id))}>
                            ${product.price}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Product;
