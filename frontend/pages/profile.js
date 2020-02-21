import React, { useEffect, useState, Fragment } from 'react';
import { useForm } from 'react-hook-form';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';

import Layout from '../components/Layout';
import Loader from '../components/Loader';

const ProfilePage = ({}) => {
    const [profile, setProfile] = useState(null);
    const { register, handleSubmit, errors } = useForm();
    const [posts, setPosts] = useState([]);

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

    const onPostSubmit = async (data) => {
        const postResponse = await fetch('/api/users/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-SessionToken': localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        });

        const {posts} = await postResponse.json();

        setPosts(posts);

    }

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
                            <form onSubmit={handleSubmit(onPostSubmit)} className="profile__posts-container">
                                <input name="post" className="profile__post-input" placeholder="whats on your mind?" type="text" ref={register({ required: true, min: 5 })}/>
                                {errors.post && <span className="profile__post-error">Post must have content</span>}
                                <button className="" type="submit">Post</button>
                            </form>
                            <div className="profile__board-container">
                                <div className="profile__post-board">
                                    {
                                        posts.map((item, index) => {
                                            return (
                                                <div className="profile__post" key={index}>
                                                    <span className="">{item}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
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
                    height: 100vh;
                }

                .profile__header {
                    display: flex;
                    flex-direction: row;
                    border: 1px solid red;
                }

                .profile__content {
                    background-color: #fff;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border: 1px solid green;
                    margin: 20px auto;
                    padding: 10px;
                    max-height: 50%;
                }

                .profile__posts-container {
                    display: flex;
                    flex-direction: column;
                    align-items: end;
                }

                .profile__post {
                    border: 1px solid #ab8484;
                    display: block;
                }

                .profile__post-error {
                    background-color: #BA3F1D;
                    color: #fff;
                }
            
            `}</style>
        </Layout>
    )
};

export default ProfilePage;