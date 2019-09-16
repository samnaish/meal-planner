
import Layout from '../components/Layout';
import Login from "../components/Login";

const Page = () => {
    return (
        <Layout>
            <div className="login-page">
                <Login />
            </div>
            <style jsx>
                {`
                    .login-page {
                        background-image: url(/static/images/selectionbox.jpg);
                        box-shadow: 0 3000px rgba(100, 20, 0, 0.3) inset;
                        background-size: cover;
                        background-position: center;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 700px;
                        max-height: 800px;
                        width: 100%;
                    }
                `}
            </style>
        </Layout>
    );
}

export default Page;