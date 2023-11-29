import styles from './page.module.css';
import Slider from '@/app/components/Slider/Slider';
import FilterBookCategory from '@/app/components/FilterBookCategory/FilterBookCategory';
import BtnLoadMore from '@/app/components/BtnLoadMore/BtnLoadMore';
import PromoLink from '@/app/components/PromoLinks/PromoLinks';


export default function HomePage() {

    return (
        <div className={styles.main}>
            <div className={styles.containerSlider}><Slider /></div>
            <div className={styles.promo}>
                <PromoLink />
            </div>
            <FilterBookCategory />
            <BtnLoadMore />
        </div>
    )
}