import React, { Fragment } from 'react';

const IngredientList = ({ ingredients }) => {
    return (
            <div className="ingredient">
                <table className="ingredient__table">
                    <tbody>
                        <tr>
                            <th>Ingredient name</th>
                            <th>Total measurement</th>
                        </tr>
                            {
                                Object.keys(ingredients).map((key, index) => {
                                    const { quantity, unit } = ingredients[key];
                                    return (
                                        <tr className="ingredient__list-container" key={index}>
                                            <td className="ingredient__list-name">{key}</td>
                                            <td className="ingredient__list-measurement">{quantity}{unit}</td>
                                        </tr>
                                    )
                                })
                            }
                    </tbody>
                </table>
                <style>{`

                    .ingredient__table {
                        width: 100%;
                    }
            
                    .ingredient__list-container:nth-child(odd) {
                        background-color: #E4E6C3;
                    }

                    ingredient__list-container:nth-child(even) {
                        background-color: #9C9990;
                    }
                    

            `}</style>
            </div>

    )
};

export default IngredientList;