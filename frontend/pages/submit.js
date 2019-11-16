import React from 'react';

import Layout from "../components/Layout";
import Submit from "../components/Submit";

export default () => {
    return (
        <Layout>
            <div className="submit__background">
                <h1 className="submit__title">Add a Recipe</h1>
                <Submit />
            </div>
                <style jsx>{`

                    .submit__background {
                        display: flex;
                        min-height: 100vh;
                        flex-direction: column;
                        background-image: url(https://lovefoodhatewaste.ca/wp-content/uploads/2018/06/FoodBackground.jpg);
                        box-shadow: 0 3000px rgba(20, 0, 20, 0.3) inset;
                        background-size: cover;
                        background-position: center;
                        flex-grow: 2;
                    }

                    .submit__title {
                        display: inline-block;
                        margin: 30px auto;
                        color: lightgrey;
                    }

                    .submit__title::before, .submit__title::after {
                        content: '';
                        border: 1px solid grey;
                        margin-left: 10px;
                        margin-right: 10px;
                    }

                `}</style>
        </Layout>
    );
}