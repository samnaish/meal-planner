import React from 'react';

export default () => {
    return (
        <footer className="footer">
            <p className="footer__caption">&copy; Developed by <a className="footer__anchor" href="https://github.com/samnaish">Sam Naish</a></p>
            <style>{`

                .footer {
                    background-color: #7c7287;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }

                .footer__anchor {
                    text-decoration: none;
                    color: black;
                }

                .footer__anchor:hover {
                    color: darkgrey;
                }
            
            `}</style>
        </footer>
    );
}