import React from 'react';

export default ({ title }) => {
    return (
        <h3 className="heading">
            {title}
            <style jsx>
                {`
                h3 {
                    display: block;
                    font-size: 26px;
                    padding: 10px;
                    text-align: center;
                }

                h3::before, h3::after {
                    content: '';
                    border: 1px solid black;
                }

                h3::before {
                    margin-right: 10px;
                }

                h3::after {
                    margin-left: 10px;
                }
                `}
            </style>
        </h3>
    )
}