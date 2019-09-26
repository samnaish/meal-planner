import { useRouter } from 'next/router';
import dishData from "../../data/food.json";
import Layout from "../../components/Layout";
import Heading from "../../components/Heading";


const RecipePage = ({ dish }) => {
    const router = useRouter();
    
    return (
        <Layout>
            <div className="recipe">  
                <div className="recipe__header">
                    <h3 className="recipe__title">{router.query.id}. {dish.name}</h3>
                    <img className="recipe__image" src={dish.image}/>
                </div>
                <div className="prep">
                    <h4 className="prep__title">Time</h4>
                    <p className="prep__time">Estimated Prep-Time: <strong>{dish.time.prep}</strong></p>
                    <p className="prep__cook">Estimated Cook-Time: <strong>{dish.time.cook}</strong></p>
                    <p className="prep__servings">Servings: <strong>{dish.servings}</strong></p>
                    <h4 className="ingredients__title">Ingredients needed</h4>
                        {
                            dish.ingredients.map((item, index) => {
                                return <div key={index}>
                                    <li className="ingredient-item">{item.name} {item.quantity}{item.units}</li>
                                </div>
                            })
                        }
                </div>
            </div>
            <style jsx>{`

                .recipe {
                    background-color: #E6E6E6;
                    display: flex;
                    flex-direction: row;
                    min-width: 100%;
                }

                .recipe__header {
                    display: flex;
                    flex-direction: column;
                }

                .recipe__title {
                    justify-content: center;
                    align-items: center;
                    font-size: 26px;
                    margin: 0 0 0 30px;
                    padding: 10px;
                    width: 250px;
                }

                .recipe__image {
                    justify-content: center;
                    align-items: center;
                    width: 180px;
                    height: 180px;
                    object-fit: cover;
                    border-radius: 50%;
                    margin: 20px auto;
                }

                .prep {
                    display: flex;
                    flex-direction: column;
                }

                .prep__title {
                    font-size: 26px;
                    display: block;
                    width: 1200px;
                    padding: 10px;
                }

                .prep__title::before, .prep__title::after {
                    content: '';
                    border: 1px solid black;
                }

                .prep__title::before {
                    margin-right: 10px;
                }

                .prep__title::after {
                    margin-left: 10px;
                }


                .prep__time {
                    margin: 5px 0 5px 0;
                    justify-content: center;
                    align-items: center;
                    padding: 5px 0 5px 10px;
                }

                .prep__cook {
                    margin: 5px 0 5px 0;
                    justify-content: center;
                    align-items: center;
                    padding: 5px 0 5px 10px;
                }

                .prep__servings {
                    justify-content: center;
                    padding: 5px 0 5px 10px;
                    align-items: center;
                }

                .ingredients__title {
                    font-size: 26px;
                    display: block;
                    width: 1200px;
                    padding: 10px;
                }

                .ingredients__title::before, .ingredients__title::after {
                    content: '';
                    border: 1px solid black;
                }

                .ingredients__title::before {
                    margin-right: 10px;
                }

                .ingredients__title::after {
                    margin-left: 10px;
                }

                .ingredient-item {
                    display: block;
                    list-style: none;
                    padding: 5px 0 5px 10px;
                }

            `}</style>
        </Layout>
    );
};

RecipePage.getInitialProps = async (context) => {
    console.log(context.query.id);

    return {
        dish: dishData.find((item) => {
            return item.id === context.query.id;
        })
    }
}
export default RecipePage;