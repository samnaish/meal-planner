import React from 'react';

export default ( { subtitle, caption, imageName }) => {
    return (
        <div className="how">
            <span className="how__subtitle">{subtitle}</span>
            <img className="how__img" src={`https://img.icons8.com/ios/60/000000/${imageName}`}/>
            <p className="how__caption">{caption}</p>
            <style jsx>{`

                .how {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    min-width: 250px;
                    width: 50%;
                    outline: 1px solid black;
                    padding: 10px;
                }

                .how__subtitle {
                    font-size: 24px;
                    margin: 10px;
                }

                .how__img {
                    height: 60px;
                    width: 60px;
                    margin: 10px;
                    object-fit: cover;
                    padding: 10px; 
                }

                .how__caption {
                    text-align: center;
                }

            `}</style>
        </div>
    );
}