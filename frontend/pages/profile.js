import React, { useEffect, useState, Fragment } from 'react';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';

import Layout from '../components/Layout';
import Loader from '../components/Loader';
import ButtonComponent from '../components/ButtonComponent';

const ProfilePage = ({}) => {
    const [profile, setProfile] = useState(null);
    //const [post, setpost] = useState([]);

    useEffect(() => {
        async function fetchProfile () {
            if (!localStorage.getItem('token')) {
                return Router.push('/');
            }
            const response = await fetch('/api/profile', {
                headers: {
                    'X-SessionToken': localStorage.getItem('token')
                }
            });
            const responseJson = await response.json();
            setProfile(responseJson.profile);
        }
        fetchProfile();
    }, []);

    return (
        <Layout>
            <div className="profile">
                <h2 className="profile__title">Profile Page</h2>
                <div className="profile__content">
                 {
                    !profile ? <Loader/> : (
                        <Fragment>
                            <div className="profile__header">
                                <img className="profile__image" src="https://img.icons8.com/ios/50/000000/user.png"/>
                                <div className="profile__user-info">
                                    <span className="profile__user-name">Name: {profile.first_name}</span>
                                    <br/>
                                    <span className="profile__user-email">Email: {profile.email}</span>
                                    <a className="profile__link" href="/plan">Plan your meals</a>
                                </div>
                            </div>
                            <div className="profile__posts">
                                <input className="profile__post-input" placeholder="whats on your mind?" type="text"/>
                                <button className="profile__post-button" type="button">Post</button>
                            </div>
                            <div className="profile__board-container">
                                <div className="profile__post-board">this is a post board</div>
                            </div>
                        </Fragment>
                    ) 
                }
                </div>
            </div>
            <style jsx>{`
            
                .profile {
                    display: flex;
                    flex-direction: column;
                    border: 1px solid pink;
                }

                .profile__header {
                    display: flex;
                    flex-direction: row;
                    border: 1px solid red;
                }
            
            `}</style>
        </Layout>
    )
};

export default ProfilePage;