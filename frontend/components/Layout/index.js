import React, { useState, useEffect } from 'react';
import decode from 'jwt-decode';

import Navigation from "../Navigation";
import Footer from "../Footer";

import SessionContext from '../../contexts/session';


// login
    // success => save token in localStorage
    // redirect user to recipes
// recipes
    // Layout at the top of the page
        // Layout has a useEffect
        // that useEffect says look in localStorage

export default ({ children }) => {
    const [session, setSession] = useState(null);
    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        if (!savedToken) return;

        try {
            const sessionObject = decode(savedToken);
            setSession(sessionObject);
        } catch (error) {
            localStorage.removeItem('token');
        }

    }, []);

    return (
        <SessionContext.Provider value={session}>
            <div className="app-container">
                <Navigation />
                <main className="content">{children}</main>
                <Footer />
                <style jsx="true" global="true">{`
                    * {
                        box-sizing: border-box;
                    }

                    html, body {
                        margin: 0;
                        padding: 0;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                        font-size: 16px;
                        height: 100%;
                        color: #222;
                    }

                    .app-container {
                        display: flex;
                        flex-direction: column;
                        min-height: 100vh;
                    }

                    main.content {
                        flex-grow: 1;
                    }
                `}</style>
            </div>
        </SessionContext.Provider>
    )
}