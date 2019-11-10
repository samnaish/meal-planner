import React from 'react';
import Link from 'next/link';

export default ({ id, name, image }) => {
    return (
        <div className="link" style={{ backgroundImage: `url(${image})` }}>
            <div className="link__overlay"></div>
            <Link as={`/recipes/${id}`} href="/recipes/[id]">
                <a className="link__name">{name}</a>
            </Link>
        <style jsx> {`
            .link {
                position: relative;
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center;
            }
            
            .link__overlay {
                width: 100%;
                height: 100%;
                transition: background-color 0.25s ease;
            }

            .link:hover .link__overlay {
                background-color: rgba(80, 80, 255, 0.5);
            }

            .link__name {
                position: absolute;
                display: block;
                width: 100%;
                top: 50%;
                text-align: center;
                padding: 0 25%;
                font-size: 18px;
                color: white;
                font-weight: 500;
                text-decoration: none;
                transform: translateY(-50%);
                opacity: 0;
                transition: opacity 0.25s ease;
            }

            .link:hover .link__name {
                opacity: 1;
            }

            `}</style>
        </div>
    );
}