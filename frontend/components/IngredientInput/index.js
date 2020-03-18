import React, { Fragment } from 'react';

export default ({ index, register, onRemove }) => {
    return (
        <Fragment>
            <div className="ingredient">
                <input
                    name={`ingredients[${index}].name`}
                    className="ingredient__input"
                    type="text"
                    ref={register()}
                />
                <div className="ingredient__measurement">
                    <input name={`ingredients[${index}].quantity`} className="ingredient__input" type="number" ref={register()} />
                    <select name={`ingredients[${index}].unit`} className="ingredient__input" ref={register()}>
                        <option value="">None</option>
                        <option value="grams">Grams</option>
                        <option value="tbsp">TBSP</option>
                        <option value="ml">ML</option>
                    </select>
                    <button onClick={() => onRemove(index)} className="ingredient__remove" title="Remove ingredient" type="button">X</button>
                </div>

            </div>
            <style jsx>
                {`
                .ingredient__input {
                    display: block;
                    width: 100%;
                    height: 30px;
                    border-radius: 5px;
                    border: 1px solid #CCC;
                    margin-bottom: 5px;
                }

                .ingredient__measurement {
                    display: flex;
                    flex-direction: row;
                    margin-bottom: 25px;
                }

                .ingredient__measurement .ingredient__input {
                    display: inline-block;
                    width: 40%;
                    margin-right: 5px;
                }

                .ingredient__remove {
                    cursor: pointer;
                    height: 30px;
                    width: 30px;
                    border-radius: 5px;
                    border: 1px solid #CCC;
                    background-color: #F44;
                    color: white;
                }
                `}
            </style>
        </Fragment>

    );
}
