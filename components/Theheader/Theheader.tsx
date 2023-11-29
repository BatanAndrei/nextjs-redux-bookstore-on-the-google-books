//'use client';
'use client';


import styles from './theheader.module.css';
import { montserrat } from '@/app/layout';
import Link from 'next/link';
import SvgUser from '@/public/svgComponents/svgUser';
import SvgSearch from '@/public/svgComponents/svgSearch';
import SvgCart from '@/public/svgComponents/svgCart';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation'


export default function Theheader() {

    const pathname = usePathname();
    
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <h1 className={montserrat.className+' '+styles.logo}>Bookshop</h1>
                <ul className={montserrat.className+' '+styles.navLinks}>
                    <li className={styles.navLinksItemBooks}><Link className={styles.navLinksDecorationItems} href="/">books</Link></li>
                    <li className={styles.navLinksItems}><Link className={styles.navLinksDecorationItems} href="/audiobooks">audiobooks</Link></li>
                    <li className={styles.navLinksItems}><Link className={styles.navLinksDecorationItems} href="/stationery">Stationery & gifts</Link></li>
                    <li className={styles.navLinksItems}><Link className={styles.navLinksDecorationItems} href="/blog">blog</Link></li>
                </ul>
                <div className={styles.navIinfo}>
                    <button className={styles.navIinfoUser}><Link href="/profile"><SvgUser /></Link></button>
                    <button className={styles.navInfoSearch}><SvgSearch /></button>
                    <button className={styles.navInfoCart}><Link href="/cart"><SvgCart /></Link></button>
                    <div className={styles.navInfoCartFlag}>0</div>
                </div>
            </nav>
        </header>
    )
}