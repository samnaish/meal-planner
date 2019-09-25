import { useRouter } from 'next/router';
import dishData from "../../data/food.json";
import Layout from "../../components/Layout";

const RecipePage = ({ dish }) => {
    const router = useRouter();
    console.log('dish', dish);
    
    return (
        <Layout>
            <div>
                {router.query.id}. {router.query.name}
            </div>
        </Layout>
    );
};

RecipePage.getInitialProps = async (context) => {
    console.log(context.query.id);

    return {
        dish: dishData.find((item) => {
            item.name === context.query.name; 
            return item.id === context.query.id;
        })
    }
}

export default RecipePage;