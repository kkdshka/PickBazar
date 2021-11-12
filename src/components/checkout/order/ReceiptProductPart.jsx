import React from 'react';

export const ReceiptProductPart = ({ product }) => {
    return (
        <div className="order_product">
            <div>
                <span className="order_product_count">{product.count}</span>
                <span className="order_product_factor">x</span>
                {product.data.name}&nbsp;|&nbsp;{product.data.size}
            </div>
            <div>$ {product.data.price}</div>
        </div>
    );
};

