import styles from './page.module.css';
import Slider from '@/app/components/Slider/Slider';
import promo_2 from '@/public/images/promo_2.png';
import promo_1 from '@/public/images/promo_1.png';
import Link from 'next/link';
import Image from 'next/image';


export default function HomePage() {
    return (
        <div className={styles.main}>
            <div className={styles.container_slider}><Slider /></div>
            <div className={styles.promo}>
                <Link className={styles.promo_link} href=""><div className={styles.promo_1}><Image src={promo_1} alt='banner_1' width={149} height={204} /></div></Link>
                <Link className={styles.promo_link} href=""><div className={styles.promo_2}><Image src={promo_2} alt='banner_1' width={137} height={237} /></div></Link>
            </div>
            <div className={styles.container_dots}></div>
        </div>
    )
}