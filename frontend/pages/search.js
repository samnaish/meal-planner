import { useState } from "react";
import fetch from 'isomorphic-unfetch';

import Layout from "../components/Layout";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Search from "../components/Search";


export default () => {
    return (
        <Layout>
            <Container>
                <Heading title="Search for a recipe"/>
                <Search />
            </Container>
            
        </Layout>
    );
}