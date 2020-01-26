import React, { useEffect } from 'react';
import Router from 'next/router';

import Layout from '../components/Layout';

export default () => {

    useEffect(() => {
        localStorage.removeItem('token');
        setTimeout(() => {
            Router.push('/');
        }, 2500)
    }, []);

    return (
        <Layout>
            <div>you have been logged out.</div>
            <div>sending you to home page.</div>
        </Layout>
    );
}