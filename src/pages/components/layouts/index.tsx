import { ReactNode, VFC } from 'react';
import styles from './index.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export const MainLayout: VFC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className={styles.main}>{children}</main>
    </>
  );
};
