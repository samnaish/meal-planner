import React from 'react';
import fetch from 'isomorphic-unfetch';

import Layout from "../../components/Layout";
import Recipe from "../../components/Recipe";
import Container from "../../components/Container";
import UserSideBar from '../../components/UserSideBar';

const RecipesPage = ({ dishes = [] }) => {
    return(
        <Layout>
            <Container>
                <div className="recipes">
                    <div className="recipes__list">
                        {
                            dishes.map((dish) => {
                                return (
                                    <div key={dish._id} className="recipes__list-item">
                                        <Recipe id={dish._id} name={dish.name} image={dish.image}/>
                                    </div>
                                )
                            })
                        }   
                    </div>
                    <UserSideBar />
                <style jsx>{`

                    .recipes {
                        display: flex;
                        flex-direction: row;
                    }

                    .recipes__list {
                        display: flex;
                        height: 100%;
                        flex-direction: row;
                        flex-wrap: wrap;
                    }

                    .recipes__list-item {
                        width: 33.3%;
                        min-width: 200px;
                        height: 200px;
                        flex-grow: 1;
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