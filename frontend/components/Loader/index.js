import React from 'react';

const Loader = ({ isLarge }) => {

    const size = isLarge ? 150 : 75;
    return (
        <div aria-label="Loading indicator">
            <style jsx>
                {
                    `
                    
                        div {
                            display: block;
                            width: ${size}px;
                            height: ${size}px;
                            margin: 0 auto 25px;
                            border: 4px solid #CCC;
                            border-top-color: #666;
                            border-radius: 50%;
                            animation: rotate 1s infinite;
                        }

                        @keyframes rotate{
                            from {
                                transform: rotate(0);
                            }

                            to {
                                transform: rotate(360deg);
                            }
                        }
                    `
                }
            </style>
        </div>
    )
}

export default Loader;