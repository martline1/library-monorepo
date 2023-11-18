import styles from './library.module.scss';

/* eslint-disable-next-line */
export interface LibraryProps {}

export function Library(props: LibraryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Library!</h1>
    </div>
  );
}

export default Library;
