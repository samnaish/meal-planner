import React from 'react';

import Layout from "../components/Layout";
import Heading from "../components/Heading";
import About from "../components/About";
import Container from "../components/Container";

export default () => {
    return (
        <Layout>
            <Container>
                <Heading title="About Us"/>
                <About />
            </Container>
        </Layout>
    );
}