import Image from 'next/image';
import Link from 'next/link';
import { VFC } from 'react';

import styles from './index.module.scss';

export const Header: VFC = () => {
  return (
    <>
      <section className={styles.container}>
        <header className={styles.header}>
          <div className={styles.header_icon}>
            <Image
              src='/img/headerIcon/menu.png'
              alt='menu icon'
              loading='eager'
              width={35}
              height={35}
              priority
            />
          </div>
          <h1 className={styles.typograph}>
            <Link href='/'>
              <a>
                <span className={styles.simple}>Simple</span>
                <span className={styles.news}>News</span>
              </a>
            </Link>
          </h1>
        </header>
      </section>
    </>
  );
};
