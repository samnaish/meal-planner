import React, { useState } from "react";

import Layout from "../components/Layout";
import Container from "../components/Container";
import Heading from "../components/Heading";
import SearchComponent from "../components/Search";

const Search = () => {
    return (
        <Layout>
            <Container>
                <Heading title="Search for a recipe"/>
                <SearchComponent />
            </Container>
            
        </Layout>
    );
}

export default Search;