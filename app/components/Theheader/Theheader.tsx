import styles from '@/app/components/Theheader/theheader.module.css';
import { montserrat } from '@/app/layout';
import Link from 'next/link';
import SvgUser from '@/public/svgComponents/svgUser';
import SvgSearch from '@/public/svgComponents/svgSearch';
import SvgCart from '@/public/svgComponents/svgCart';


export default function Theheader() {
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <h1 className={montserrat.className+' '+styles.logo}>Bookshop</h1>
                <ul className={montserrat.className+' '+styles.navLinks}>
                    <li className={styles.navLinksItems}><Link className={styles.navLinksDecorationItems} href="">books</Link></li>
                    <li className={styles.navLinksItems}><Link className={styles.navLinksDecorationItems} href="">audiobooks</Link></li>
                    <li className={styles.navLinksItems}><Link className={styles.navLinksDecorationItems} href="">Stationery & gifts</Link></li>
                    <li className={styles.navLinksItems}><Link className={styles.navLinksDecorationItems} href="">blog</Link></li>
                </ul>
                <div className={styles.navIinfo}>
                    <button className={styles.navIinfoUser}><SvgUser /></button>
                    <button className={styles.navInfoSearch}><SvgSearch /></button>
                    <button className={styles.navInfoCart}><SvgCart /></button>
                    <div className={styles.navInfoCartFlag}>0</div>
                </div>
            </nav>
        </header>
    )
}