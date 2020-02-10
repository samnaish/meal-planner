import React,{ useState } from 'react';
import { useForm } from 'react-hook-form';

import IngredientInput from '../IngredientInput';
import ButtonComponent from '../ButtonComponent'
import ErrorComponent from '../ErrorComponent';

export default () => {
    const { register, handleSubmit, errors } = useForm();
    const [count, setCount] = useState(1);
    const [ submitting, setSubmitting ] = useState(false);
    const [ failure, setFailure ] = useState(null);
    const [ success, setSuccess ] = useState(false);

    const onRecipeSubmit = async (data) => {
        try {
            setSubmitting(true);
            const createResponse = await fetch('/api/food/', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const recipeData = await createResponse.json();
            setSubmitting(false);

            if(recipeData.error) {
                setFailure(recipeData.error);
            } else {
                setSuccess(true);
            }
        } catch (error) {
            setSubmitting(false);
            setfailure("Unknown error, please try again.");
        }

    }

    return (
        <div className="form">
            <form className="form__form" onSubmit={handleSubmit(onRecipeSubmit)}>
                {
                    failure && <ErrorComponent message={failure}/>
                }
                <div className="form__header">
                    <h4 className="form__title">Dish name</h4>
                    <input placeholder="name" name="name" className="form__name-input" type="text" ref={register({ required: true, minLength: 2 })} />
                    { errors.name && <span className="form_error">Please enter the name</span> }
                    <input placeholder="image URL" name="image" className="form__name-input" type="text" ref={register({required: true})} />
                    { errors.image && <span className="form_error">Please enter image URL</span> }
                    <input placeholder="servings" name="servings" className="form__name-input" type="number" ref={register({required: true, minLength: 1})} />
                    { errors.servings && <span className="form_error">Please enter servings amount</span> }
                </div>
                <div className="form__sub-header" >How many Ingredients? {count}</div>
                <div className="form__inputs">
                    {
                        Array.from(new Array(count)).map((item, index) => <IngredientInput key={index} id={index + 1} />)
                    }
                </div>
                <button type="button" className="form__button" onClick={() => setCount(count + 1)}>Add Ingredient</button>
-                <ButtonComponent disabled={submitting} type="submit" label="Submit!"/>
            </form>
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
                    margin: 10px 5px;
                    text-align: center;
                }

                .form__name-input {
                    margin: 3px;
                    display: block;
                    text-align: center;
                    font-weight: 500;
                    height: 30px;
                    width: 100%;
                    min-width: 200px;
                    padding: 5px;
                    border: 1px solid lightgrey;
                    border-radius: 4px;
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
                    background-color: #297373;
                    color: white;
                    border: none;
                    font-size: 16px;
                    cursor: pointer;
                    border-radius: 10px;
                    transition: background 0.3s ease;
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
