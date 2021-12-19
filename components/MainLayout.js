import Link from "next/link";
import styles from "../styles/main.module.sass"

export default function mainLayout({ children }){
    return (
        <div className={styles.main_wrapper}>
            <nav>
                <ul>
                    <li>
                        <Link href={'/'}>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/todos'}>
                            <a>Todos</a>
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