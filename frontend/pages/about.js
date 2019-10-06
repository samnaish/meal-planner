import Layout from "../components/Layout";
import Heading from "../components/Heading";
import About from "../components/About";


export default () => {
    return (
        <Layout>
            <Heading title="About Us"/>
            <About />
        </Layout>
    );
}