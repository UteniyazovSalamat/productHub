import { GiCancel } from 'react-icons/gi';
import { Product } from '../types/types';
import { FC } from 'react';

interface ProductsProps {
    items: Product[];
    increaseQuantity: (id: number) => void;
    resetQuantity: (id: number) => void;
}

const Products: FC<ProductsProps> = ({ items, increaseQuantity, resetQuantity }) => {
    return (
        <div className="products">
            <div className="products-container">
                <div className="info">
                    <h1 className="title">Products</h1>
                    <p className="paragraph">Explore out products for a delightful selection</p>
                </div>
                <div className="products-cards">
                    {items.map((product) => (
                        <div className="product__card" key={product.id}>
                            <div className="product__img">
                                <img src={product.img} alt={product.name} />
                            </div>
                            <div className="product__info">
                                <h3 className="product__name">{product.name}</h3>
                                <p className="product__description">{product.description}</p>
                                <div className="product__actions">
                                    <h3 className="product__actions-title">Quantity: {product.quantity}</h3>
                                    <div className="product__actions-btns">
                                        <button className="product__cancel-btn" onClick={() => resetQuantity(product.id)}>
                                            <GiCancel style={{ fontSize: '20px', paddingTop: '3px' }} />
                                        </button>
                                        <button className="product__price" onClick={() => increaseQuantity(product.id)}>
                                            ${product.price}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
