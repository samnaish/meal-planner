import Layout from "../components/Layout";
import Link from 'next/link';
import fetch from "isomorphic-unfetch";

const getPost = () => {
    return [
        { id: 'hello-nextjs', title:'Hello Next.js'},
        { id: 'learn-nextjs', title:'Learn Next.js'},
        { id: 'deploy-nextjs', title:'Deploy apps with ZEIT'}
    ]
}

const PostLink = ({ post }) => {
    return (
        <li>
            <Link href="/p/[id]" as={`/p/${post.id}`}>
                <a>{post.title}</a>
            </Link>
            <style jsx>{`
                li {
                    list-style: none;
                    margin: 5px 0;
                }

                a {
                    text-decoration: none;
                    color: blue;
                    font-family: 'arial';
                }

                a:hover {
                    opacity: 0.6;
                }
            `}</style>
        </li>
    )
}

const Index = ({ shows }) => {  
    return (
        <Layout>
            <h1>This the main title</h1>
            <ul>
                {
                    getPost().map(post => {
                        return(
                            <PostLink key={post.id} post={post} />
                        )
                    })
                }
            </ul>
            <h3>This is a sub-title</h3>
            <ul>
                {
                    shows.map((show) => {
                        return (
                            <li key={show.id}>
                                <Link href="/p/[id]" as={`/p/${show.id}`}>
                                    <a>{show.name}</a>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <style jsx>{`
                h1,
                a {
                    font-family: 'Arial';
                }

                ul {
                    padding: 0;
                }

                li {
                    list-style: none;
                    margin: 5px 0;
                }

                a {
                    text-decoration: none;
                    color: blue;
                }

                a:hover {
                    opacity: 0.6;
                }
            `}</style>
        </Layout>
    );
};

Index.getInitialProps = async () => {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    console.log('data', data);
    
    return {
        shows: data.map(entry => entry.show)
    };
}

export default Index;
