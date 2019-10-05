import Layout from "../components/Layout";
import Heading from '../components/Heading';
import Submit from "../components/Submit";

export default () => {
    return (
        <Layout>
            <div className="submit__background">
                <Heading title="Add a Recipe"/>
                <Submit />
            </div>
                <style jsx>{`

                    .submit__background {
                        display: flex;
                        height: auto;
                        flex-direction: column;
                        background-image: url(https://lovefoodhatewaste.ca/wp-content/uploads/2018/06/FoodBackground.jpg);
                        box-shadow: 0 3000px rgba(20, 0, 20, 0.3) inset;
                        background-size: cover;
                        background-position: center;
                        flex-grow: 1;
                    }

                `}</style>
        </Layout>
    );
}