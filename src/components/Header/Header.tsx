import styles from './Header.module.scss';

function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <h1 className={styles.headerTitle}>Created by Glazov Oleg</h1>
        </header>
    );
}

export default Header;
