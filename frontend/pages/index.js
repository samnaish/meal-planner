import Layout from "../components/Layout";
import Link from 'next/link';

const PostLink = props => {
    return (
        <li>
            <Link href="{`/post?title=${props.title}`}">
                <a>{props.title}</a>
            </Link>
        </li>
    );
}

export default () => {
    return (
        <Layout>
            <h1>This the main title</h1>
            <ul>
                <PostLink title="hello Next.js"/>
                <PostLink title="Learning Next.js"/>
                <PostLink title="Deploy apps with Zeit"/>
            </ul>
        </Layout>
    );
}