import React, {Fragment} from 'react';

const ResultItem = ({ image, name}) => {

    return (
        <Fragment>
            <div className="result__list-container" >
                <img className="result__item-image" src={image}/>
                <span className="result__item-name">{name}</span>
            </div>
            <style>{`

                .result__list-container {
                    display: flex;
                    flex-direction: column;
                    width: 100px;
                } 

                .result__item-image {
                    width: 100%;
                    max-height: 50px;
                }

                .result__item-name {
                    margin: 5px auto;
                    font-size: 14px;
                }

            `}</style>
        </Fragment>
    )
}

export default ResultItem;