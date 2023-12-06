'use client';


import styles from './theheader.module.css';
import { montserrat } from '@/app/layout';
import Link from 'next/link';
import SvgUser from '@/public/svgComponents/svgUser';
import SvgSearch from '@/public/svgComponents/svgSearch';
import SvgCart from '@/public/svgComponents/svgCart';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation'
import LoginForm from '@/components/LoginForm/LoginForm';


export default function Theheader() {

    const pathname = usePathname();

    let login: boolean = false;
    
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <h1 className={montserrat.className+' '+styles.logo}>Bookshop</h1>
                <ul className={montserrat.className+' '+styles.navLinks}>
                    <li className={styles.navLinksItems}><Link className={styles.navLinksDecorationItems+ ' ' +clsx(styles.navLinksItems, {[styles.navLinksItemBooks]: pathname === "/"})} href="/">books</Link></li>
                    <li className={styles.navLinksItems}><Link className={styles.navLinksDecorationItems+ ' ' +clsx(styles.navLinksItems, {[styles.navLinksItemBooks]: pathname === "/audiobooks"})} href="/audiobooks">audiobooks</Link></li>
                    <li className={styles.navLinksItems}><Link className={styles.navLinksDecorationItems+ ' ' +clsx(styles.navLinksItems, {[styles.navLinksItemBooks]: pathname === "/stationery"})} href="/stationery">Stationery & gifts</Link></li>
                    <li className={styles.navLinksItems}><Link className={styles.navLinksDecorationItems+ ' ' +clsx(styles.navLinksItems, {[styles.navLinksItemBooks]: pathname === "/blog"})} href="/blog">blog</Link></li>
                </ul>
                <div className={styles.navIinfo}>
                    <Link className={clsx({[styles.disabled]: pathname === "/profile"})} href={login ? "/profile" : "" } ><SvgUser /></Link>
                    <Link className={styles.navInfoSearch} href=""><SvgSearch /></Link>
                    <Link className={clsx({[styles.disabled]: pathname === "/cart"})} href="/cart"><SvgCart /></Link>
                    <div className={styles.navInfoCartFlag}>0</div>
                    {login ? "" : <LoginForm />}
                </div>
            </nav>
        </header>
    )
}