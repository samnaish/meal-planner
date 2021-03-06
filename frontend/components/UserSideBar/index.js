import React, { useContext } from 'react';

import SessionContext from "../../contexts/session";
import Update from '../Update';
import Link from 'next/link';

const UserSideBar = () => {
    const options = { year: 'numeric', month: 'long'};
    const { user } = useContext(SessionContext) || {};

    if (!user) {
        return null;
    }
    
    return (
        <div className="recipes__side-bar">
            <div className="recipe__header">
                <img className="recipe__bar-image" src="https://img.icons8.com/ios/50/000000/user.png"/>
                <div className="recipe__user">
                    <a className="recipe__bar-username" href="../profile">{user.first_name}</a>
                    <div className="recipe__occupation">{user.email}</div>
                </div>
            </div>
            <div className="recipe__user-info">
                <h3 className="recipe__corner">corner heading</h3>
                <div className="recipe__header-container">
                    <h2 className="recipe__passage-heading">Info heading</h2>
                    <p className="recipe__passage-sub">Sub Heading</p>
                </div>
                <p className="recipe__passage-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="recipe__passage-tags">
                    <span className="recipe__item">{new Date().toLocaleDateString('EN-gb', options)}</span>
                    <span className="recipe__item">Price - £ ???</span>
                </div>
            </div>
            <div className="recipe__update-container">
                <h4 className="recipe__update-post">Posts Feed</h4>
                <Update name="Alex Naish" passage="Added the Thai green curry to my favourites!"/>
                <Update name="Alex Naish" passage="Added the Thai green curry to my favourites!"/>
                <Update name="Angela" passage="The Three fish pie is going to added to my favourites!"/>
                <Update name="Alex Naish" passage="Added the Thai green curry to my favourites!"/>
                <Update name="Alex Naish" passage="Added the Thai green curry to my favourites!"/>
                <Update name="Alex Naish" passage="Added the Thai green curry to my favourites!"/>
                <Update name="Richard Naish" passage="There's is still no recipe for a hard boiled egg!"/>
                <Update name="Sara Szopko" passage="Where's the recipes with chocolate?"/>
                <Update name="Richard Naish" passage="There's is still no recipe for a hard boiled egg!"/>
                <Update name="Alex Naish" passage="Added the Thai green curry to my favourites!"/>
                <Update name="Angela" passage="The Three fish pie is going to added to my favourites!"/>
                <Update name="Bob" passage="Soo many choices so little time!"/>
            </div>
            <style jsx>
                {
                `
                .recipes__side-bar {
                    border: 1px solid lightgrey;
                    width: 20%;
                    min-width: 240px;
                    background-color: #e6e6e6;
                }

                .recipe__header {
                    display: flex;
                    flex-direction: row;
                    border: 1px solid lightgrey;
                    align-items: center;
                    padding: 10px;
                    background-color: white;
                }

                .recipe__bar-image {
                    width: 40px;
                    height: 40px;
                    margin-right: 10px;
                }

                .recipe__bar-username {
                    font-size: 16px;
                    margin: 0;
                }

                .recipe__occupation {
                    color: #FE4E00;
                    font-size: 14px;
                    margin: 0;
                }

                .recipe__user-info {
                    border: 1px solid lightgrey;
                    background-color: #E6E6E6;
                }

                .recipe__update-container {
                    overflow-y: auto;
                    max-height: 158vh;
                }

                .recipe__update-post {
                    color: #5d7a86;
                    font-size: 14px;
                    font-weight: 400;
                    margin: 5px 0 5px 10px;
                    min-width: 100px;
                }

                .recipe__corner {
                    font-size: 10px;
                    font-weight: 400;
                    margin: 5px 0 10px 10px;
                    color: #5d7a86;
                }

                .recipe__passage-heading {
                    margin: 5px 0 5px 10px;
                    font-size: 14px;
                }

                .recipe__passage-sub {
                    margin: 2px 0 2px 10px;
                    font-size: 12px;
                    color: #5d7a86;
                }

                .recipe__passage-text {
                    color: #333;
                    margin: 10px 0 0 0;
                    padding: 0 5px 5px 10px;
                }

                .recipe__passage-tags {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 15px;
                }

                @media screen and (max-width: 560px) {
                    .recipes__side-bar {
                        width: 100%;
                    }
                }
                `
                }
            </style>
        </div>
    )
};

export default UserSideBar;