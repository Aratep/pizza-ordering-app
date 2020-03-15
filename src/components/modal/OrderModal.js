import React from 'react';

import './styles.scss';

const OrderModal = ({ message, name, price, onClose, isOpen }) => {
    return (
        <div className="order-modal" style={{ display: isOpen ? 'flex' : 'none' }}>
            <span onClick={onClose}>X</span>

            <div className="order-details">
                <h1>{message}</h1>
                <p>You ordered <b>{name}</b></p>
                <p>Total price is <b>{price} AMD</b></p>
            </div>
        </div>
    )
}

export default OrderModal