import React from 'react';

export const ReceiptSubTotalPart = ({ name, price }) => {
    return (
        <div className="order_sub-total">
            <div>{name}</div>
            <div>$ {price}</div>
        </div>
    );
};
