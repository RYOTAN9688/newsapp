import { GetStaticProps } from 'next';
import Head from 'next/head';

import styles from '../styles/Home.module.scss';
import { Article } from './components/article';
import { MainLayout } from './components/layouts';

export default function Home(props) {
  return (
    <>
      <MainLayout>
        <Head>
          <title>NewsApp</title>
        </Head>
        <div className={styles.contents}>
          <div className={styles.blank}>
            <div className={styles.main}>
              <Article title='headlines' articles={props.topArticles} />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
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
