import { FC } from 'react';

import styles from './index.module.scss';
import moment from 'moment';
import { Props } from '../types/interface';

export const Article: FC<Props> = ({ articles, title }) => {
  return (
    <>
      <section className={styles.article}>
        <div className={styles.article_heading}>
          <h1>{title.toUpperCase()}</h1>
        </div>
        {articles.map((article, index) => {
          const time = moment(article.publishedAt || moment.now())
            .fromNow()
            .slice(0, 1);
          return (
            <a href={article.url} key={index} target='_blank' rel='noreferrer'>
              <article className={styles.article_main}>
                <div className={styles.article_title}>
                  <p>{article.title}</p>
                  <p className={styles.article_time}>{time}時間前</p>
                </div>
                {article.urlToImage && (
                  <img
                    key={index}
                    src={article.urlToImage}
                    alt={`${article.title}image`}
                    className={styles.article_img}
                  />
                )}
              </article>
            </a>
          );
        })}
      </section>
    </>
  );
};
