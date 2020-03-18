import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';


import Link from 'next/link'
import IngredientInput from '../IngredientInput';
import ButtonComponent from '../ButtonComponent'
import ErrorComponent from '../ErrorComponent';

export default () => {
    const { register, handleSubmit, control, errors } = useForm({
        defaultValues: { ingredients: [], time: {} }
    });
    const { fields, append, remove } = useFieldArray({
        name: 'ingredients',
        control
    });

    const [submitting, setSubmitting] = useState(false);
    const [failure, setFailure] = useState(null);
    const [success, setSuccess] = useState(false);

    const onRecipeSubmit = async (data) => {

        try {
            setSubmitting(true);
            const createResponse = await fetch('/api/food/', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'X-SessionToken': localStorage.getItem('token')
                },
                body: JSON.stringify(data)
            });
            const recipeData = await createResponse.json();
            console.log('============');
            console.log('recipeData', recipeData);
            console.log('============');

            setSubmitting(false);

            if (recipeData.error) {
                setFailure(recipeData.error);
            } else {
                setSuccess(recipeData.recipe);
            }
        } catch (error) {
            setSubmitting(false);
            setFailure("Unknown error, please try again.");
        }

    }

    return (
        <div className="form">
            {
                success ? (
                    <div>
                        <span>Great Success!</span>
                        <Link as={`/recipes/${success._id}`} href="/recipes/[id]">
                            <a className="form__link">To the Recipes!</a>
                        </Link>
                    </div>
                )
                    : (
                        <form className="form__form" onSubmit={handleSubmit(onRecipeSubmit)}>
                            {
                                failure && <ErrorComponent message={failure} />
                            }
                            <div className="form__header">
                                <h4 className="form__title">Dish name</h4>
                                <input placeholder="name" name="name" className="form__name-input" type="text" ref={register({ required: true, minLength: 2 })} />
                                {errors.name && <span className="form_error">Please enter the name</span>}
                                <input placeholder="image URL" name="image" className="form__name-input" type="text" ref={register({ required: true })} />
                                {errors.image && <span className="form_error">Please enter image URL</span>}
                                <input placeholder="servings" name="servings" className="form__name-input" type="number" ref={register({ required: true, min: 1 })} />
                                {errors.servings && <span className="form_error">Please enter servings amount</span>}
                                <input name="time.prep" type="number" min="1" ref={register} />
                                <input name="time.cook" type="number" min="1" ref={register} />
                                <span><input type="checkbox" name="vegetarian" ref={register} /> Vegetarian</span>
                            </div>
                            <div className="form__sub-header" >How many Ingredients? {fields.length}</div>
                            <div className="form__inputs">
                                {
                                    fields.map((item, index) => <IngredientInput key={item.id} index={index} register={register} onRemove={remove} />)
                                }
                            </div>
                            <div className="form__button-container">
                                <button type="button" className="form__button" onClick={() => append({ name: '', quantity: 1, unit: '' })}>Add Ingredient</button>
                            </div>
                            <ButtonComponent disabled={submitting} type="submit" label="Submit!" />
                        </form>
                    )
            }

            <style jsx>{`

                .form {
                    background-color: #F5853F;
                    width: 500px;
                    margin: 20px auto;
                    padding: 20px;
                    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
                    border-radius: 10px;
                }

                .form__header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
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
                    margin: 5px;
                    text-align: center;
                }

                .form__name-input {
                    margin: 4px;
                    display: block;
                    text-align: center;
                    font-weight: 500;
                    height: 40px;
                    width: 100%;
                    min-width: 200px;
                    padding: 0 10px;
                    font-size: 16px;
                    background-color: lightgrey;
                    border: none;
                    border-radius: 5px;
                    transition: border-color 0.3s ease;
                }

                .form__inputs {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 0 35px;
                }

                .form__button {
                    display: block;
                    margin: 5px;
                    min-width: 200px;
                    padding: 10px;
                    background-color: #297373;
                    color: white;
                    border: none;
                    font-size: 16px;
                    cursor: pointer;
                    border-radius: 10px;
                    transition: background 0.3s ease;
                }

                .form__button-container {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }

                .form__buuton:disabled {
                    cursor: not-allowed;
                    background-color: grey;
                }

                .form__button:hover {
                    opacity: 0.8;
                    background-color: #615d6c;
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
