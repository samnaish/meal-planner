import React from 'react';

export default ({ children }) => {
    return (
        <div>
            {children}
            <style jsx={true}>{`
                div {
                    max-width: 1200px;
                    width: 100%;
                    margin: 0 auto;
                    padding: 0 10px;
                }
            `}</style>
        </div>
    );
}