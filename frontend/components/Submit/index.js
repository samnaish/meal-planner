import React from 'react';

import { useState } from 'react';
import IngredientInput from "../IngredientInput";

export default () => {
    const [count, setCount] = useState(1);
    
    return (
        <div className="form">
            <form className="form__form">
                <div className="form__header">
                    <h4 className="form__title">Dish name</h4>
                    <input className="form__name-input" type="text" />
                </div>
                <div className="form__sub-header" >How many Ingredients? {count}</div>
                <div className="form__inputs">
                    {
                        Array.from(new Array(count)).map((item, index) => <IngredientInput key={index} id={index + 1} />)
                    }
                </div>
                <button type="button" className="form__button" onClick={() => setCount(count + 1)}>Add Ingredient</button>
                <button type="submit" className="form__button">Submit!</button>
            </form>
            <style jsx>{`
        
                .form {
                    background-color: #3962ad;
                    width: 500px;
                    margin: 20px auto;
                    padding: 20px;
                    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
                    border-radius: 10px;  
                }

                .form__header {
                    margin: 10px;
                    text-align: center;
                }

                .form__title {
                    margin: 5px auto;
                }

                .form__name {
                    display: block;
                }

                .form__sub-header {
                    margin: 10px 5px;
                    text-align: center;
                }

                .form__name-input {
                    text-align: center;
                    font-weight: 500;
                    height: 30px;
                    min-width: 200px;
                    padding: 5px;
                    border: 1px solid lightgrey;
                    border-radius: 4px;
                    outline-color: #de6f07;
                    transition: border-color 0.3s ease;
                }

                .form__inputs {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 0 20px;
                }

                .form__button {
                    display: block;
                    margin: 5px auto;
                    min-width: 200px;
                    padding: 10px;
                    background-color: #ff8800;
                    color: white;
                    border: none;
                    font-size: 16px;
                    cursor: pointer;
                    border-radius: 10px;
                    transition: background 0.3s ease;
                }

                .form__button:hover {
                    opacity: 0.8;
                    background-color: #70703d;
                }

                @media screen and (max-width: 540px) {
                    .form {
                        width: 350px;
                    }

                    .input__box {
                        display: block;
                        margin: 5px auto;
                    }
                }

        `}</style>
    </div>
    );
}
