import React, { useState } from 'react';

import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import Panel from '../../components/Panel';

const UserPage = ({ account = {} }) => {
    const [friendAdded, setFriendAdded] = useState(false);
    const [error, setError] = useState(null);

    const addFriend = async (userId) => {
        const response = await fetch(`/api/profile/friend`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-SessionToken': localStorage.getItem('token')
            },
            body: JSON.stringify({ id: userId })
        });

        if (response.ok) {
            setFriendAdded(true);
        } else {
            setError("An error occurred adding this friend.");
        }

    }

    return (
        <div className="user">
            <Layout>
                <Container>
                    <div className="user__upper-content">
                        <Panel title="My Profile" subtitle="Profile subtitle">
                            <div className="user__content">
                                <div className="user__image-container">
                                    <img className="user__image" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" />
                                </div>
                                <div className="user__info">
                                    <p className="user__item"><span className="user__caption">first name: </span>{account.first_name}</p>
                                    <p className="user__item"><span className="user__caption">last name: </span>{account.last_name}</p>
                                    <p className="user__item"><span className="user__caption">email: </span>{account.email}</p>
                                    <button disabled={friendAdded} onClick={() => addFriend(account._id)} className="user__friend-button" type="button">
                                        {friendAdded ? 'Friend Added!' : 'Add Friend'}
                                    </button>
                                </div>
                            </div>
                        </Panel>
                        <div className="user__statistics">
                            <Panel title="Statistics" subtitle="Statistic subtitle">
                                <p className="user__panel-caption">Hello, I'm a side-bar for the Statistics.</p>
                            </Panel>
                        </div>
                    </div>
                    <div className="user__content-bottom">
                        <Panel title="Recipes" subtitle="Recipes Subtitle">
                            <p className="user__panel-caption">Hello, I'm a footer-bar for the recipes.</p>
                        </Panel>
                    </div>
                </Container>
            </Layout>
            <style jsx>{`

                .user {
                    background-color: #DBDBDB;
                }

                .user__upper-content {
                    display: flex;
                    flex-direction: row;
                    margin-top: 40px;
                }

                .user__content {
                    display: flex;
                    flex-direction: row;
                }

                .user__image-container {
                    padding: 5px;
                    width: 20%;
                    margin: 5px;
                }

                .user__image {
                    display: block;
                    margin: 0 auto;
                    border-radius: 50%;
                    width: 70%;
                }

                .user__info {}

                .user__item {
                    margin-left: 10px;
                }

                .user__friend-button {
                    border: none;
                    background-color: #ffae03;
                    border-radius: 5px;
                    width: 200px;
                    height: 30px;
                    transition: color 0.3s ease;
                }

                .user__friend-button:hover {
                    color: #fff;
                    border: 1px solid #B0B5B3;
                }

                .user__friend-button:disabled {
                    background-color: #888;
                    color: white;
                    cursor: not-allowed;
                }

                .user__statistics {
                    flex-grow: 1;
                    margin-left: 10px;
                    width: 30%;
                }

                .user__panel-caption {
                    margin: 5px 0;
                    font-size: 15px;
                }

                .user__content-bottom {
                    margin-top: 10px;
                }

            `}</style>
        </div>
    )
};

UserPage.getInitialProps = async ({ req, query }) => {
    const baseUrl = req ? `${req.headers['x-forwarded-proto']}://${req.headers['x-forwarded-host']}` : '';
    const userRequest = await fetch(`${baseUrl}/api/users/${query.id}`);
    const { account } = await userRequest.json();
    return {
        account
    }
}

export default UserPage;
