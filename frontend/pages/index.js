import Layout from "../components/Layout";
import Heading from '../components/Heading';
import Reason from "../components/Reason";
import How from "../components/How";
import Dishes from "../components/Dishlist";

export default () => {
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
            <div className="row">
                <Heading title="What can you do?" />
                <How subtitle="1. Find the meal for you" imageName="book.png" caption="Pick from a list of carefully selected recipes."/>
                <How subtitle="2. Plan and Gather" imageName="ingredients.png" caption="Gather the ingredients you need."/>
                <How subtitle="3. Make and Bake" imageName="cooking-pot.png" caption="Start Cooking!"/>
                <How subtitle="4. If your creative..." imageName="add-column.png" caption="If you have a recipe of your own, then you can add to our collection!"/>
            </div>
            <div className="row">
                <Heading title="Possible Meals" />
                <Dishes />
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

            `}</style>
        </Layout>
        
    )
}