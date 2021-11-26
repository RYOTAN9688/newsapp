import { ReactNode, VFC } from 'react';
import { Header } from '../header';
import styles from '../../../styles/Home.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export const MainLayout: VFC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
};
