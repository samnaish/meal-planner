import React from 'react';
import Link from 'next/link';

export default ({ _id, first_name, last_name }) => {
    return (
        <div className="user">
            <Link as={`/users/${_id}`} href="/users/[id]">
                <a className="user__link">{first_name} {last_name}</a>
            </Link>
        </div>
    );
}
