import React, { useEffect, useState } from "react";
import fetch from 'isomorphic-unfetch';

export default () => {
    const [ searchTerm, updateSearchTerm ] = useState("");
    const [ searchResults, updateSearchResults ] = useState([]);
    
    const findResults = async () => {
        const request = await fetch(`/api/search?term=${searchTerm}`);
        const jsonData = await request.json();
        updateSearchResults(jsonData.results);
    };
    
    return (
        <div className="search">
            <div className="search__bar-container">
                <input className="search__bar" onChange={(ev) => updateSearchTerm(ev.target.value)}/>
                <button className="search__button" onClick={() => findResults()}>search</button>
            </div>
            {
                searchResults.map(res => {
                    return (
                        <div className="search__result">
                            <a className="search__result-item" href={`/recipes/${res._id}`}>{res.name}</a>
                        </div>
                    )
                })
            }
                <style jsx>{`

                    .search {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }

                    .search__bar-container {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    .search__bar {
                        display: inline-block;
                        padding: 10px;
                        width: 50%;
                        margin: 10px auto;
                    }

                    .search__button {
                        display: block;
                        border: none;
                        color: white;
                        text-decoration: none;
                        width: 200px;
                        margin: 10px auto;
                        text-align: center;
                        background-color: #710000;
                        padding: 10px;
                        transition: 0.3s ease;
                    }

                    .search__button:hover {
                        border-radius: 10px;
                        background-color: #197278;
                    }

                    .search__result {
                        width: 50%;
                        margin: 5px auto;
                    }

                    .search__result-item {
                        font-weight: 500;
                        text-decoration: none;
                        color: black;
                        transition: 0.3s ease;
                    }

                    .search__result-item:hover {
                        color: #710000;
                        text-decoration: underline;
                    }


                `}</style>
        </div>
    );
}