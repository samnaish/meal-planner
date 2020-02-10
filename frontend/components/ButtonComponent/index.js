import React from 'react';

const ButtonComponent = ({ disabled, label }) => {

    return (
        <div className="button__container">
            <button className="button__button" disabled={disabled} type="submit">{label}</button>
        <style jsx>{`

            .button__container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
            }

            .button__button {
                margin-bottom: 20px;
                padding: 10px;
                width: 45%;
                height: 36px;
                background-color: #297373;
                color: white;
                display: inline-block;
                text-decoration: none;
                border: none;
                font-size: 14px;
                transition: background 0.3s ease;
                text-transform: uppercase;
                cursor: pointer;
                border-radius: 5px;
            }

            button:hover {
                opacity: 0.8;
                background-color: #615d6c;
            }

            .button__button:disabled {
                cursor: not-allowed;
                background-color: grey;
            }

        `}</style>
        </div>
    )
}

export default ButtonComponent;