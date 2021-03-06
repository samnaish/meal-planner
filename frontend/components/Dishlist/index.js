import React from 'react';

export const Dish = ({ name, image, servings, cookTime }) => {
    return(
        <div className="dish">
            <strong data-test-prop="name">
                {name}
            </strong>
            <img className="dish__image" src={image} />
            <div className="dish__info">
                Serves <strong data-test-prop="servings">{servings}</strong> in <strong data-test-prop="cookTime">{cookTime}</strong>.
            </div>
            <style jsx>
                {`

                    .dish {
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                    }

                    .dish__image {
                        width: 150px;
                        height: 150px;
                        object-fit: cover;
                        border-radius: 50%;
                        margin: 10px;
                    }

                    strong {
                        font-weight: 500;
                    }
                
                `}
            </style>
        </div>
    )
}

export default ({ dishes = [] }) => {
    return (
        <div className="dish-list">
            {
                dishes.slice(0, 2).map((dish, index) => {
                    return (
                        <div key={index} className="dish-list__item">
                            <Dish name={dish.name} image={dish.image} servings={dish.servings} cookTime={dish.time.cook} />
                        </div>
                    )
                })
            }
            <style jsx>{`

                .dish-list {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    jusitify-content: center;
                }

                .dish-list__item {
                    width: 50%;
                    min-width: 300px;
                    padding: 10px;
                }
            
            `}</style>
        </div>
    )
}
