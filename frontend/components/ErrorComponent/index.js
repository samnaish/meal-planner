import React from 'react';

const ErrorComponent = ({ message, items = [] }) => {
    return (
        <div className="error">
            <div className="error__items">{items}</div>
            <div className="error__message">{message}</div>
            {
                items.map((item, index) => {
                return <div className="error__item" key={index}>{item}</div> 
                })
            }
        <style>{`

            .error {
                background-color: #FFBABA;
                color: #402d2d;
                width: 100%;
                border: 1px solid red;
                border-radius: 5px;
                padding: 5px;
                margin-bottom: 10px;
            }
        
        `}</style>
        </div>
    )
}

export default ErrorComponent;