import React, {useState} from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import fetch from 'isomorphic-unfetch';
import classNames from 'classnames';

import Layout from '../components/Layout';
import Loader from '../components/Loader';
import Range from '../components/Range';
import ResultItem from '../components/ResultItem';
import Checkbox from '../components/Checkbox';
import IngredientList from '../components/IngredientList';


const PlanPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [liked, setLiked] = useState({});
    const { register, handleSubmit } = useForm();
    const [ingredients, setIngredients] = useState(null);

    const likeItem = (recipe) => {
        if (!liked[recipe._id]) {
            setLiked({
                ...liked,
                [recipe._id]: recipe
            });
        }
    }

    const removeLike = (recipe) => {
        if (liked[recipe._id]) {
            const newLiked = {...liked};
            delete newLiked[recipe._id];
            setLiked(newLiked);
        }
    }

    const generateMealPlan = async (data) => {
        setIsLoading(true);
        const daysRequired = data.days - Object.keys(liked).length;
        const ignoreLiked = Object.keys(liked).join(',');
        const response = await fetch(`/api/generate?days=${daysRequired}&ignore=${ignoreLiked}&vegetarian=${data.vegetarian}`);
        const { results } = await response.json();
        const newResults = [...results, ...Object.values(liked)];
        setResults(newResults);
        setIsLoading(false);        
    }

    const generateIngredients = async () => {
        const allIds = Object.keys(liked).join(',');
        const response = await fetch(`/api/generate/ingredients/?ids=${allIds}`);
        const { ingredients } = await response.json();
        setIngredients(ingredients);
        console.log('============');
        console.log('ingredients', ingredients);
        console.log('============');
        
    }
    
    return (
        <Layout>
            <h1>plan my week</h1>
            <div className="generate">
                <span>Use our easy generator to plan your week!</span>
                <form className="generate__form" onSubmit={handleSubmit(generateMealPlan)}>
                    <Range name="days" min="1" max="7" step="1" ref={register}/>
                    <Checkbox name="vegetarian" label="Vegetarian dishes" ref={register}/>
                    <button className="generate__cta" type="submit">Generate!</button>
                </form>
                <div className="generate__results">

                    { !isLoading && results.length === 0 && <span>Go ahead and generate your meals!</span> }
                    
                    { isLoading && <Loader /> }
                    {
                        !isLoading &&
                        results.map((result) => {
                            const isLiked = liked[result._id];
                            const className = classNames('generate__item', { 'generate__item--liked': isLiked });
                            return (
                                <div key={result._id} className={className}>
                                    <Link as={`/recipes/${result._id}`} href="/recipes/[id]">
                                        <a className="generate__anchor">
                                            <ResultItem image={result.image} name={result.name}/>
                                        </a>
                                    </Link>
                                    <div className="generate__button-container">
                                        {
                                            isLiked ? <button className="generate__button" onClick={() => removeLike(result)} type="button">Remove</button> : 
                                            <button className="generate__button" onClick={() => likeItem(result)} type="button">Keep</button>
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    {
                        Object.keys(liked).length > 0 && <button type="submit" onClick={generateIngredients}>Get ingredients</button>
                    }
                    {
                        ingredients && <IngredientList ingredients={ingredients}/>
                    }
                        
                </div>

            </div>
            <style jsx>
                {
                    `
                    .generate {
                        text-align: center;
                    }

                    .generate__cta {
                        display: block;
                        margin: 20px auto;
                        width: 150px;
                        height: 50px;
                        background: #ACEDFF;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                    }

                    .generate__input {
                        display: block;
                        margin: 10px 0;
                        -webkit-appearance: none;
                        height: 26px;
                        width: 100%;
                    }

                    .generate__input::after {
                        content: '7';

                    }

                    .generate__results {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-evenly;
                        flex-wrap: wrap;
                        background-color: #F4F4F4;
                        border-top: 2px solid #E4E4E4;
                        padding: 40px;
                    }

                    .generate__item {
                        display: flex;
                        flex-direction: column;
                    }

                    .generate__item--liked {
                        background-color: green;
                        border-radius: 5px;
                    }

                    .generate__anchor {
                        color: #222;
                        text-decoration: none;
                        padding: 10px;
                        transition: background-color 0.3s ease;
                        border-radius: 5px;
                        height: 75%;
                        margin-bottom: 10px;
                    }

                    .generate__anchor:hover {
                        background-color: #8F9491;
                    }

                    .generate__anchor:focus {
                        outline: blue;
                    }

                    .generate__button-container {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-evenly;
                    }

                    .generate__button {
                        display: block;
                        border: none;
                        background-color: #ACEDFF;
                        padding: 5px;
                        border-radius: 5px;
                    }

                    .generate__button:hover {
                        background-color: #CFFCFF;
                    }

                    .generate__liked {
                        display: block;
                        width: 100%;
                    }

                    `
                }
            </style>
        </Layout>
    )
}

export default PlanPage;