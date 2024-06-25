/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./Header.module.css"

export default function Header() {
    return(
        <header className={styles.header}>
            <h1 className={styles.nomeEmpresa}>Junior's Bookstore</h1>

            <nav className={styles.navLinks}>
                <a href="#">Home</a>
                <a href="#">Read now</a>
            </nav>
        </header>
    );
}
