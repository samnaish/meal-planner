import { useState } from "react";
import fetch from 'isomorphic-unfetch';

import Layout from "../components/Layout";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Search from "../components/Search";


const Search = () => {
    return (
        <Layout>
            <Container>
                <Heading title="Search for a recipe"/>
                <Search />
            </Container>
            
        </Layout>
    );
}

Search.getInitialProps = async ({ req }) => {
    function generateServerSideURL(req) {
        return req.headers['x-forwarded-proto'] 
            ? `${req.headers['x-forwarded-proto']}://${req.headers['x-forwarded-host']}`
            :'http://localhost:3000';
    }
};

export default Search;