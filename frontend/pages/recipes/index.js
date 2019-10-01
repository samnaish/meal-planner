import fetch from 'isomorphic-unfetch';

import Layout from "../../components/Layout";
import Recipe from "../../components/Recipe";
import Container from "../../components/Container";
import Update from "../../components/Update";

const RecipesPage = ({ dishes }) => {
    const options = { year: 'numeric', month: 'long'};
    return(
        <Layout>
            <Container>
                <div className="recipes">
                    <div className="recipes__list">
                        {
                            dishes.map((dish) => {
                                return (
                                    <div key={dish.id} className="recipes__list-item">
                                        <Recipe id={dish.id} name={dish.name} image={dish.image}/>
                                    </div>
                                )
                            })
                        }   
                    </div>
                    <div className="recipes__side-bar">
                        <div className="recipe__header">
                            <img className="recipe__bar-image" src="https://img.icons8.com/ios/50/000000/user.png"/>
                            <div className="recipe__user">
                                <h1 className="recipe__bar-username">Username</h1>
                                <p className="recipe__occupation">occupation</p>
                            </div>
                        </div>
                        <div className="recipe__user-info">
                            <h3 className="recipe__corner">corner heading</h3>
                            <h2 className="recipe__passage-heading">Info heading</h2>
                            <p className="recipe__passage-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="recipe__passage-tags">
                                <span className="recipe__item">{new Date().toLocaleDateString('EN-gb', options)}</span>
                                <span className="recipe__item">Price - £ ???</span>
                            </div>
                        </div>
                        <div className="recipe__update-container">
                            <Update name="Alex Naish" passage="Added the Thai green curry to my favourites!"/>
                            <Update name="Alex Naish" passage="Added the Thai green curry to my favourites!"/>
                            <Update name="Alex Naish" passage="Added the Thai green curry to my favourites!"/>
                            <Update name="Alex Naish" passage="Added the Thai green curry to my favourites!"/>
                            <Update name="Alex Naish" passage="Added the Thai green curry to my favourites!"/>
                            <Update name="Alex Naish" passage="Added the Thai green curry to my favourites!"/>
                            <Update name="Richard Naish" passage="There's is still no recipe for a hard boiled egg!"/>
                            <Update name="Sara Szopko" passage="Where's the recipes with chocolate?"/>
                            <Update name="Angela" passage="The Three fish pie is going to added to my favourites!"/>
                            <Update name="Bob" passage="Soo many choices so little time!"/>
                        </div>
                    </div>
                <style jsx>{`

                    .recipes {
                        display: flex;
                        flex-direction: row;
                    }

                    .recipes__list {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        width: 80%;
                    }

                    .recipes__list-item {
                        width: 33.3%;
                        min-width: 200px;
                        height: 200px;
                        flex-grow: 1;
                    }

                    .recipes__side-bar {
                        border: 1px solid black;
                        width: 20%;
                        min-width: 200px;
                        background-color: #e6e6e6;
                    }

                    .recipe__header {
                        display: flex;
                        flex-direction: row;
                        border: 1px solid lightgrey;
                        align-items: center;
                        padding: 10px;
                        background-color: white;
                    }

                    .recipe__bar-image {
                        width: 40px;
                        height: 40px;
                        margin-right: 10px;
                    }

                    .recipe__bar-username {
                        font-size: 16px;
                        margin: 0;
                    }

                    .recipe__occupation {
                        color: #FE4E00;
                        font-size: 14px;
                        margin: 0;
                    }

                    .recipe__user-info {
                        border: 1px solid black;
                        background-color: #E6E6E6;
                    }

                    .recipe__update-container {
                        overflow-y: auto;
                        max-height: 55vh;
                    }

                    .recipe__corner {
                        font-size: 10px;
                        font-weight: 400;
                        margin: 5px 0 5px 10px;
                        color: darkgrey;
                    }

                    .recipe__passage-heading {
                        margin: 5px 0 5px 10px;
                        font-size: 14px;
                    }

                    .recipe__passage-text {
                        color: #333;
                        margin: 10px 0 0 0;
                        padding: 0 5px 5px 10px;
                    }

                    .recipe__passage-tags {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                    }

                    .recipe__item {
                        font-size: 14px;
                        margin: 10px 5px 0 0;
                        padding: 0 5px 5px 10px;

                    }

                    @media screen and (max-width: 560px) {

                        .recipes {
                            flex-direction: column;
                        }

                        .recipes__list, .recipes__side-bar {
                            width: 100%;
                        }

                        .recipe__update-container {
                            overflow-y: auto;
                            max-height: 100vh;
                        }

                    }

                `}</style>
                </div>
            </Container>
        </Layout>
    );
}


RecipesPage.getInitialProps = async ({ req }) => {
    const baseUrl = req ? `${req.headers['x-forwarded-proto']}://${req.headers['x-forwarded-host']}` : '';
    const foodRequest = await fetch(`${baseUrl}/api/food`);
    const { data } = await foodRequest.json();
    return {
        dishes: data
    };
}

export default RecipesPage;