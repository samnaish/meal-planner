import React, { Fragment } from 'react';

const IngredientList = ({ ingredients }) => {
    console.log('============');
    console.log('ingredients', ingredients);
    console.log('============');
    return (
            <div className="ingredient">
                <ul className="ingredient__list-container">
                    {
                        Object.keys(ingredients).map((key, index) => {
                            const { quantity, unit } = ingredients[key];
                            return (
                            <li className="ingredient__list-item" key={index}>{key}: {quantity}{unit}</li>
                            )
                        })
                    }
                </ul>
                <style>{`
            
                    .ingredient__list-item {

                    }        

            `}</style>
            </div>

    )
};

export default IngredientList;