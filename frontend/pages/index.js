import Layout from "../components/Layout";
import Link from 'next/link';

const PostLink = (props) => (
        <li>
            <Link href="/p/[id]" as={`/p/${props.id}`}>
                <a>{props.id}</a>
            </Link>
        </li>
    );

export default function Blog () {
    return (
        <Layout>
            <h1>This the main title</h1>
            <ul>
                <PostLink id="hello-next"/>
                <PostLink id="learning-next"/>
                <PostLink id="deploying-next"/>
            </ul>
        </Layout>
    );
}