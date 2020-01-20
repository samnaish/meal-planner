import React from 'react';
import fetch from 'isomorphic-unfetch';
import link from "next/link";

import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import Link from 'next/link';

const UsersPage = ({ results = [] }) => {
    return (
        <Layout>
            <Heading title="User List" />
            <div className="user__list-container">
                {
                    results.map(user => {
                        return (
                            <div className="user__items" key={user._id}>
                                <Link as={`users/${user._id}`} href="users/[id]">
                                    <a className="user__list-people">{user.first_name} {user.last_name}</a> 
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        <style>{`

                .user__list-container {
                    display: flex;
                    flex-direction: row;
                    height: 100%;
                    width: 80%;
                    flex-wrap: wrap;
                    justify-content: space-evenly;
                    align-items: center;
                    margin: 20px auto;
                    padding: 0;
                }

                .user__list {
                    margin: 5px 0;
                    width: 33%;

                }

                .user__list-people {
                    display: block;
                    text-align: center;
                    list-style: none;
                    width: 150px;
                    margin: 5px 0px;
                    height: 50px;
                    padding: 12px 10px;
                    transition: 0.3s background-color ease;
                    text-decoration: none;
                    color: black;
                }

                .user__list-people:hover {
                    background-color: #B0B5B3;
                    border-radius: 5px;
                }

        `}</style>
        </Layout>
    );
}

UsersPage.getInitialProps = async ({ req }) => {
    function generateServerSideURL(req) {
        return req.headers['x-forwarded-proto'] 
            ? `${req.headers['x-forwarded-proto']}://${req.headers['x-forwarded-host']}`
            :'http://localhost:3000';
    }
    const baseUrl = req ? generateServerSideURL(req) : '';

    const response = await fetch(`${baseUrl}/api/users/`);
    const { results } = await response.json();

    return {
        results
    };
}

export default UsersPage;


