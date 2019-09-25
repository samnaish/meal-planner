import { useRouter } from 'next/router';
import dishData from "../../data/food.json";
import Layout from "../../components/Layout";


const RecipePage = ({ dish }) => {
    const router = useRouter();
    console.log('dish', dish);
    
    return (
        <Layout>
            <div className="recipe">  
                <div className="recipe__header">
                    <h3 className="recipe__title">{router.query.id}. {dish.name}</h3>
                    <img className="recipe__image" src={dish.image}/>
                </div>
                <div className="prep">
                    <p className="prep__time">Estimated Prep-Time: <strong>{dish.time.prep}</strong></p>
                    <p className="prep__cook">Estimated Cook-Time: <strong>{dish.time.cook}</strong></p>
                    <p className="prep__servings">Servings: <strong>{dish.servings}</strong></p>
                </div>
            </div>
            
            
            <style jsx>{`

                .recipe {
                    margin: 20px 10px 20px 0px;
                    background-color: #E6E6E6;
                    display: flex;
                    flex-direction: row;
                    width: 800px;
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

                .prep__time {
                    justify-content: center;
                    align-items: center;
                    margin: 0 0 0 50px;
                    padding: 10px;
                }

                .prep__cook {
                    justify-content: center;
                    align-items: center;
                    margin: 0 0 0 50px;
                    padding: 10px;
                }

                .prep__servings {
                    justify-content: center;
                    padding: 10px;
                    align-items: center;
                    margin: 0 0 0 50px;
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