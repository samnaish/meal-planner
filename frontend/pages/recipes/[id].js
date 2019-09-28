import { useRouter } from 'next/router';
import dishData from "../../data/food.json";
import Layout from "../../components/Layout";
import Container from "../../components/Container";

const RecipePage = ({ dish }) => {
    const router = useRouter();
    
    return (
        <Layout>
            <Container>
                <div className="recipe">  
                    <div className="recipe__header">
                        <h1 className="recipe__title">{dish.name}</h1>
                        <div className="recipe__details">
                            <div className="recipe__detail" title="Preparation Time">
                                <img src="https://img.icons8.com/ios/16/000000/cooking-book.png" />
                                <strong className="recipe__detail-focus">{dish.time.prep}</strong>
                                <span>mins</span>
                            </div>
                            <div className="recipe__detail" title="Cooking Time">
                                <img src="https://img.icons8.com/ios/16/000000/frying-pan.png" />
                                <strong className="recipe__detail-focus">{dish.time.cook}</strong>
                                <span>mins</span>
                            </div>
                            <div className="recipe__detail">
                                <img src="https://img.icons8.com/ios/16/000000/cutlery.png" />
                                <strong className="recipe__detail-focus">{dish.servings}</strong>
                                <span>servings</span>
                            </div>
                        </div>
                    </div>
                    <div className="recipe__content">
                        <div className="recipe__ingredients">
                            <h3 className="recipe__ingredients-heading">Ingredients</h3>
                            <ul className="recipe__ingredients-list">
                                {
                                    dish.ingredients.map((item) => {
                                        return (
                                            <li className="recipe__ingredient">
                                                <div className="recipe__ingredient-quantity">{item.quantity}{item.units}</div>
                                                <div className="recipe__ingredient-info"> {item.name}</div>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        <div className="recipe__image-container">
                            <a className="recipe__save-link" href="#">Save Recipe</a>
                            <img className="recipe__image" src={dish.image}/>
                        </div>
                    </div>
                </div>
            </Container>
            
            <style jsx>{`

                .recipe {
                    margin-bottom: 30px;
                }

                .recipe__header {
                    padding: 20px 0;
                }

                .recipe__title {
                    font-weight: 500;
                    text-align: center;
                    margin: 0;
                    margin-bottom: 10px;
                    color: #333;
                }

                .recipe__details {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-evenly;
                    margin: 0 auto;
                    max-width: 400px;
                    width: 100%;
                }

                .recipe__detail-focus {
                    padding: 0 5px;
                }

                .recipe__content {
                    display: flex;
                    flex-direction: row;
                }

                .recipe__ingredients, .recipe__image-container {
                    width: 50%;
                }

                .recipe__ingredients {
                    background-color: #E6E6E6;
                    margin-top: 20px;
                    padding: 30px;
                }

                .recipe__ingredients-heading {
                    margin: 0;
                    font-size: 14px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: #333;
                }

                .recipe__ingredients-list {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }

                .recipe__ingredient {
                    display: flex;
                    flex-direction: row;
                    padding: 5px;
                }

                .recipe__ingredient-quantity {
                    display: inline-block;
                    font-size: 24px;
                    padding: 0 5px;
                    margin-right: 10px;
                    font-weight: 500;
                    width: 75px;
                }

                .recipe__ingredient-info {
                    font-size: 14px;
                    border-bottom: 1px dashed lightgrey;
                    flex-grow: 1;
                    line-height: 32px;
                }

                .recipe__image-container {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                }

                .recipe__save-link {
                    color: #333;
                    text-decoration: none;
                    line-height: 40px;
                    text-align: right;
                    padding-right: 15px;
                }

                .recipe__image { 
                    object-fit: cover;
                    position: absolute;
                    left: -15px;
                    top: 40px;
                    width: 100%;
                    max-height: calc(100% - 40px);
                }

            `}</style>
        </Layout>
    );
};

RecipePage.getInitialProps = async (context) => {
    return {
        dish: dishData.find((item) => item.id === context.query.id)
    }
}
export default RecipePage;