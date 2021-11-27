import Image from 'next/image';
import Link from 'next/link';
import { VFC } from 'react';

import styles from './index.module.scss';

export const Header: VFC = () => {
  return (
    <>
      <section className={styles.container}>
        <header className={styles.header}>
          <button className={styles.header_icon}>
            <Image
              src='/img/headerIcon/menu.png'
              alt='menu icon'
              loading='eager'
              width={35}
              height={35}
              priority
            />
          </button>
          <h1 className={styles.typograph}>
            <Link href='/'>
              <a>
                <span className={styles.news}>News</span>
                <span className={styles.app}>App</span>
              </a>
            </Link>
          </h1>
        </header>
      </section>
    </>
  );
};
