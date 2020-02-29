import React, { useEffect, useState, Fragment } from 'react';
import { useForm } from 'react-hook-form';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import decode from 'jwt-decode';

import Layout from '../components/Layout';
import Loader from '../components/Loader';

const ProfilePage = ({}) => {
    const [profile, setProfile] = useState(null);
    const { register, handleSubmit, errors } = useForm();
    const [posts, setPosts] = useState([]);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            return Router.push('/');
        }
        async function fetchProfile () { 
            const response = await fetch('/api/profile', {
                headers: {
                    'X-SessionToken': localStorage.getItem('token')
                }
            });
            const responseJson = await response.json();
            setProfile(responseJson.profile);
        }

        async function fetchUserPosts () {
            const { user } = decode(localStorage.getItem('token'));
            const response = await fetch(`/api/users/posts?id=${user._id}`);
            const { posts } = await response.json();
            setPosts(posts);
        }

        fetchProfile();
        fetchUserPosts();
    }, []);

    const onPostSubmit = async (data) => {
        setSubmitting(true);
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
        setSubmitting(false);
    }

    const onPostDelete = async (postId) => {
        const response = await fetch(`/api/users/posts/${postId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-SessionToken': localStorage.getItem('token')
            }
        });
        const { posts } = await response.json();
        setPosts(posts);
    }

    return (
        <Layout>
            <div className="profile">
                <div className="profile__title-container">
                    <h2 className="profile__title">Profile Page</h2>
                </div>
                <div className="profile__content">
                 {
                    !profile ? <Loader/> : (
                        <Fragment>
                            <div className="profile__header">
                                <img className="profile__image" src="https://img.icons8.com/ios/50/000000/user.png"/>
                                <div className="profile__user-info">
                                    <div className="profile__user-details">
                                        <span className="profile__user-name">Name: {profile.first_name}</span>
                                        <span className="profile__user-email">Email: {profile.email}</span>
                                    </div>
                                    <div className="profile__link-container">
                                        <a className="profile__link" href="/plan">Plan your meals</a>
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit(onPostSubmit)} className="profile__posts-container" autoComplete="off">
                                <input name="post" className="profile__post-input" placeholder="whats on your mind?" type="text" ref={register({ required: true, min: 5 })}/>
                                {errors.post && <span className="profile__post-error">Post must have content</span>}
                                <button className="profile__post-button" disabled={submitting} type="submit">Post</button>
                            </form>
                            
                            {
                                submitting 
                                    ? <Loader />
                                    : (
                                        <div className="profile__post-board">
                                            {
                                                posts.map((item) => {
                                                    return (
                                                        <div className="profile__post" key={item._id}>
                                                            <span className="profile__post-message">{item.message}</span>
                                                            <button onClick={() => onPostDelete(item._id)} type="button">Delete</button>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                            }

                            
                        </Fragment>
                    ) 
                }
                </div>
            </div>
            <style jsx>{`
            
                .profile {
                    border-radius: 5px;
                    width: 70%;
                    margin: 40px auto;
                    background: #DDD;
                    padding: 5px;
                }

                .profile__title-container {
                    display: block;
                    margin: 10px auto;
                }

                .profile__title {
                    text-align: center;
                }

                .profile__header {
                    display: flex;
                    flex-direction: row;
                    border-radius: 5px;
                    background: #e2e0e0;
                }

                .profile__image {
                    border-radius: 50%;
                    border: 1px solid;
                    margin: 5px;
                }

                .profile__user-info {
                    display: flex;
                    flex-direction: row;
                    align-items; ;
                    justify-content: ;
                }

                .profile__user-details {
                    display: flex;
                    flex-direction: column;
                    align-items: end;
                    justify-content: center;
                }

                .profile__user-name, .profile__user-email {
                    display: block;
                }

                .profile__posts-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .profile__post-input {
                    padding: 5px;
                    margin: 5px 5px 5px 0;
                    border-radius: 5px;
                    border: none;
                    outline-color: #432E36;
                }

                .profile__posts-input::focus {
                    border: 3px solid #555;
                  }

                .profile__link-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 20px;
                }

                .profile__link {
                    display: block;
                    text-decoration: none;
                    color: #222;
                    padding: 5px;
                    border-radius: 2px;
                    transition: background-color 0.3s ease;
                    outline-color: #432E36;
                }

                .profile__link:hover {
                    background-color: #97B1A6;
                }

                .profile__content {
                    background-color: #fff;
                    border-radius: 5px;
                    margin: 20px 10px 10px;
                    padding: 10px;
                    background: #ececec;
                }

                .profile__post-button {
                    width: 25%;
                    height: 10%;
                    padding: 5px;
                    border: none;
                    border-radius: 5px;
                    transition: background-color 0.3s ease;
                    background-color: #5E747F;
                    outline-color: #432E36;
                }

                .profile__post-button:hover {
                    background-color: #97B1A6;
                }

                .profile__post {
                    border: 1px solid #ab8484;
                    display: block;
                    border-radius: 5px;
                    padding: 5px;
                    margin: 5px auto;
                    transition: backgreound-color 0.3s ease;
                }

                .profile__post:hover {
                    background-color: #DDD;
                }

                .profile__post-error {
                    background-color: #BA3F1D;
                    color: #fff;
                    width: 100%;
                    border-radius: 5px;
                    margin: 5px 0;
                    padding: 2px;
                    border: 1px solid #F1BF98;
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