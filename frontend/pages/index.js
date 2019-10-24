import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Layout from "../components/Layout";
import Heading from '../components/Heading';
import Reason from "../components/Reason";
import How from "../components/How";
import DishList from "../components/Dishlist";

const HomePage = ({ foodData }) => {
    return (
        <Layout>
            <div className="welcome-splash">
                <h1 className="welcome-splash__caption">Hungry?</h1>
            </div>
            <div className="row row--red">
                <Reason title="What do you feel like eating?" caption="With Meal planner, the possiblites are endless....." imageName="chickenchips.jpg"/>
                <Reason title="Something" caption="This is my middle caption" imageName="sushi.jpeg"/>
                <Reason title="Great!" caption="This is my end caption" imageName="burger.jpg"/>
            </div>
            <div>
                <Heading title="What can you do?" />
                <div className="row">
                    <How subtitle="1. Find the meal for you" imageName="book.png" caption="Pick from a list of carefully selected recipes."/>
                    <How subtitle="2. Plan and Gather" imageName="ingredients.png" caption="Gather the ingredients you need."/>
                    <How subtitle="3. Make and Bake" imageName="cooking-pot.png" caption="Start Cooking!"/>
                    <How subtitle="4. If your creative..." imageName="add-column.png" caption="If you have a recipe of your own, then you can add to our collection!"/>
                </div>
            </div>
            <div className="homepage__buttons-container">
                <Heading title="Possible Meals" />
                <DishList dishes={foodData} />
                <div className="recipes__button-container">
                    <Link href="/recipes">
                        <a className="recipes-button">More Recipes</a>
                    </Link>
                    <Link href="/submit">
                        <a className="recipes-button">Submit a Recipe</a>
                    </Link>
                </div>
            </div>
            <style jsx>{`

                .welcome-splash {
                    background-image: url(/static/images/takeout.jpg);
                    background-size: cover;
                    background-position: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 400px;
                }

                .welcome-splash__caption {
                    background-color: rgba(0, 0, 0, 0.3);
                    padding: 10px;
                    font-size: 5vw;
                    color: #E5E5E5;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    border-radius: 20px;
                }

                .row {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    flex-wrap: wrap;
                    width: 100%;
                }

                .row--red {
                    background-color: #FF6663;
                }

                .recipes__button-container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                .recipes-button {
                    display: block;
                    color: white;
                    text-decoration: none;
                    width: 200px;
                    margin: 10px auto;
                    text-align: center;
                    background-color: #710000;
                    padding: 10px;
                    transition: 0.3s ease;
                }

                .recipes-button:hover {
                    border-radius: 10px;
                    background-color: #197278;
                }

            `}</style>
        </Layout>
        
    )
}

HomePage.getInitialProps = async ({ req }) => {
    function generateServerSideURL(req) {
        return req.headers['x-forwarded-proto'] 
            ? `${req.headers['x-forwarded-proto']}://${req.headers['x-forwarded-host']}`
            :'http://localhost:3000';
    }
    
    const baseUrl = req ? generateServerSideURL(req) : '';
    
    try {
        const foodRequest = await fetch(`${baseUrl}/api/food`);
        const { data } = await foodRequest.json();
        return {
            foodData: data
        };
    } catch (error) {
        console.error('Failed to fetch food data!');
        return {
            foodData: []
        };
    }
    
    
    
}

export default HomePage;