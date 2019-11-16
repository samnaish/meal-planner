import React from 'react';

import Layout from "../components/Layout";
import Signup from "../components/Signup";

export default () => {
    return (
        <Layout>
            <div className="signup-page">
                <Signup />
            </div>
            <style jsx>{`

                .signup-page {
                    background-image: url(/static/images/ingredients.jpg);
                    box-shadow: 0 3000px rgba(10, 0, 10, 0.3) inset;
                    background-size: cover;
                    background-position: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 700px;
                    max-height: 800px;
                    width: 100%;
                }

            `}</style>
        </Layout>
    );
}