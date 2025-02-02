import { IProduct } from '../types/types';
import { FC } from 'react';
import Product from '../components/Product';

interface ProductsProps {
    items: IProduct[];
}

const Products: FC<ProductsProps> = ({ items }) => {
    return (
        <div className="products">
            <div className="products-container">
                <div className="info">
                    <h1 className="title">Products</h1>
                    <p className="paragraph">Explore out products for a delightful selection</p>
                </div>
                <div className="products-cards">
                    {items.map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
