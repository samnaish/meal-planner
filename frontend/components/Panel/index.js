import React, { Fragment } from 'react';

export default ({ title, subtitle, children }) => {
    return (
        <Fragment>
            <div className="panel">
                {
                   title && <div className="panel__title">{title}</div>
                }
                {
                   subtitle && <div className="panel__subtitle">{subtitle}</div>
                }
                {children}
            </div>
            <style jsx>
                {
                    `
                    .panel {
                        background: white;
                        width: 100%;
                        height: 100%;
                        padding: 20px;
                        box-shadow: 0px 4px 8px rgba(60,60,60,0.5);
                    }

                    .panel__title {
                        font-size: 18px;
                        line-height 24px;
                        font-weight: 500;
                    }

                    .panel__subtitle {
                        font-size: 14px;
                        font-weight: 300;
                        line-height: 20px;
                    }

                    `
                }
            </style>
        </Fragment>
    )
}