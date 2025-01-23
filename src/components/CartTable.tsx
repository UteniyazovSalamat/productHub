import { FC } from 'react';
import { Product } from '../types/types';

interface CartTableProps {
    items: Product[];
}

const CartTable: FC<CartTableProps> = ({ items }) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <table className="cart__table">
            <thead className="ct__thead">
                <tr className="ct__thead-row">
                    <th className="ct__header">Product</th>
                    <th className="ct__header">Unit price</th>
                    <th className="ct__header">Quantity</th>
                    <th className="ct__header">Total</th>
                </tr>
            </thead>
            <tbody className="ct__tbody">
                {items
                    .filter((item) => item.quantity)
                    .map((item) => (
                        <tr key={item.id} className="ct__tbody-row">
                            <td className="ct__cell">{item.name}</td>
                            <td className="ct__cell">${item.price}</td>
                            <td className="ct__cell">{item.quantity}</td>
                            <td className="ct__cell">${item.price * item.quantity}</td>
                        </tr>
                    ))}
            </tbody>
            <tfoot className="ct__tfoot">
                <tr className="ct__tfoot-row">
                    <td colSpan={3} style={{ textAlign: 'right', fontWeight: '700' }} className="total ">
                        Total
                    </td>
                    <td className="ct__cell">${total}</td>
                </tr>
            </tfoot>
        </table>
    );
};

export default CartTable;
