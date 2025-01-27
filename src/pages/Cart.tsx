import { FC, useEffect, useState } from 'react';
import CartTable from '../components/CartTable';
import { Product } from '../types/types';

interface CartProps {
    items: Product[];
}

const Cart: FC<CartProps> = ({ items }) => {
    const [isCartEmpty, setIsCartEmpty] = useState(!items.find((item) => item.quantity > 0));

    useEffect(() => {
        setIsCartEmpty(!items.find((item) => item.quantity > 0));
    }, [items]);

    console.log('isCartEmpty', isCartEmpty);

    return (
        <div className="cart">
            <h1 className="cart__title">Your Cart</h1>

            {isCartEmpty ? (
                <h2 className="cart__empty">Cart is empty.</h2>
            ) : (
                <>
                    <CartTable items={items} />
                    <p className="cart__p">Enter your email and then click on pay, and your products will be delivered to you on the same day!</p>

                    <div className="cart__form">
                        <label>
                            Email<span style={{ color: 'green' }}>*</span>
                        </label>
                        <input type="email" placeholder="Email..." required />
                        <button className="cart__btn">Pay</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
