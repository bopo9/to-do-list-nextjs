import Link from "next/link";

export default function mainLayout({ children }){
    return (
        <>
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
        </>
    )
}