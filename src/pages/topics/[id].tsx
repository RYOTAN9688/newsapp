import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';

import { Article } from '../components/article';
import { Nav } from '../components/nav';
import { MainLayout } from '../components/layouts';
import styles from '../../styles/Home.module.scss';
import { GetStaticPaths, GetStaticProps } from 'next';

const NewsKey = process.env.NEWSKEY;

const Topic = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <MainLayout>
      <Head>
        <title>{props.title}</title>
        <nav>
          <Nav />
        </nav>
      </Head>
      <div className={styles.contents}>
        <div className={styles.blank}>
          <div className={styles.main}>
            <Article title={props.title} articles={props.topicArticle} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const topicRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&category=${params.id}&country=jp&apiKey=${NewsKey}`,
  );

  const topicJson = await topicRes.json();
  const topicArticles = await topicJson.articles;

  const title = params.id;
  console.log(title);

  return {
    props: { topicArticles, title },
    revalidate: 60,
  };
};

export default Topic;
