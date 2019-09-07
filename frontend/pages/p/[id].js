import { useRouter } from 'next/router.js';
import Layout from '../../components/Layout';

console.log({ useRouter });

export default () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
}