import { GetStaticProps } from 'next';
import Head from 'next/head';

import { MainLayout } from './components/layouts';

export default function Home(props) {
  console.log(props.topArticles);

  return (
    <MainLayout>
      <Head>
        <title>NewsApp</title>
      </Head>
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageSize = 10;
  const topRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=bb57f3c40a3c4c1aa50c6da4dc8b7fe5`,
  );
  const topJson = await topRes.json();
  const topArticles = topJson?.articles;
  return {
    props: {
      topArticles,
    },
    revalidate: 60,
  };
};
