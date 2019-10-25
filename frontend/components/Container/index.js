import React from 'react';

export default ({ children }) => {
    return (
        <div>
            {children}
            <style jsx>{`
                div {
                    max-width: 1200px;
                    width: 100%;
                    margin: 0 auto;
                }
            `}</style>
        </div>
    );
}