import Link from 'next/link';
import Layout from "../../components/Layout";
import DishesData from "../../data/food.json";


const Recipe = ({ id, name, ingredients, prepTime, cookTime }) => {
    return(
        <div className="list">
            <div className="list__item">
                <h3 className="list__title">{id}. {name}</h3>
                <p className="list__ingredients">Number of ingredients: {ingredients.length}</p>
            </div>
            <div className="list__item">
                <p className="list__time">prep: {prepTime}</p>
                <p className="list__time">cook: {cookTime}</p>
            </div>
            <div className="list__more">
                <Link as={`/recipes/${id}`} href="/recipes/[id]">
                    <a className="list__button">See More</a>
                </Link>
            </div>
            <style>{`
            
                .list {
                    margin: 10px 10px;
                    background-color: #cae5ff;
                    width: 300px;
                    padding: 10px;
                }

                .list__item {
                    margin: 0 10px;
                }

                list__title {
                    margin: 5px;
                }

                .list__more {
                    display: flex:
                    flex-direction: row;
                    margin: 10px;
                }

                .list__button {
                    justify-content: center;
                    padding: 10px;
                    background-color: #7c7287;
                    text-decoration: none;
                    border: none;
                    font-size: 12px;
                    transition: background 0.3s ease;
                    border-radius: 5px;
                    text-transform: uppercase;
                    cursor: pointer;
                }

                .list__button:hover {
                    opacity: 0.8;
                }

            `}</style>
        </div>
    )
}

export default () => {
    return(
        <Layout>
            <div className="recipe">
                {
                    DishesData.map((dish, index) => {
                        return (
                            <div key={index} className="dish-list__item">
                                <Recipe id={dish.id} name={dish.name} ingredients={dish.ingredients} prepTime={dish.time.prep} cookTime={dish.time.cook}/>
                            </div>
                        )
                    })
                }
            </div>
            <style jsx>{`

                .recipe {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 50%;
                    flex-wrap: wrap;
                }

                .recipe__list-title {
                    list-style: none;
                }

            `}</style>
        </Layout>
    );
}
