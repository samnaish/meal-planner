import Navigation from "../components/Navigation";
import Reason from "../components/Reason";
import Footer from "../components/Footer";
import How from "../components/How";

export default () => {
    return (
        <div>
            <Navigation />
            <div className="welcome-splash">
                <h1 className="welcome-splash__caption">Hungry?</h1>
            </div>
            <div className="reasons">
                <Reason title="What do you feel like eating?" caption="With Meal planner, the possiblites are endless....." imageName="chickenchips.jpg"/>
                <Reason title="Something" caption="This is my middle caption" imageName="sushi.jpeg"/>
                <Reason title="Great!" caption="This is my end caption" imageName="burger.jpg"/>
            </div>
            <div className="hows">
                <h3 className="how__title">What can you do?</h3>
                <How subtitle="Find" imageName="looking.jpg"/>
                <How subtitle="Plan and Gather" imageName="ingredients.jpg"/>
                <How subtitle="Or Make and Add" imageName="cooking.jpg"/>
            </div>
            <Footer />
            <style>{`

                body {
                    margin: 0;
                    padding: 0;
                }
            
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

                .reasons {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    flex-wrap: wrap;
                    width: 100%;
                    background-color: #cc2936;
                }

                .hows {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    flex-wrap: wrap;
                    width: 100%;
                }

            `}</style>
        </div>
        
    )
}

