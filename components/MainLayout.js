import Link from "next/link";
import styles from "../styles/main.module.sass"

export default function mainLayout({ children }){
    return (
        <div className={styles.main_wrapper}>
            <nav className={styles.navbar}>
                <ul className={styles.navbar_nav}>
                    <li className={styles.navbar_item}>
                        <Link  href={'/'}>
                            <a className={styles.navbar_link}>Home</a>
                        </Link>
                    </li>
                    <li className={styles.navbar_item}>
                        <Link href={'/todos'}>
                            <a className={styles.navbar_link}>Todos</a>
                        </Link>
                    </li>
                    <li className={styles.navbar_item}>
                        <Link href={'/completed'}>
                            <a className={styles.navbar_link}>Completed Task's</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}