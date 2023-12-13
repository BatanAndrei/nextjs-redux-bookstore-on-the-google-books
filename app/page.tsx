import styles from './page.module.css';
import Slider from '@/components/Slider/Slider';
import FilterBookCategory from '@/components/FilterBookCategory/FilterBookCategory';
import BtnLoadMore from '@/components/BtnLoadMore/BtnLoadMore';
import PromoLink from '@/components/PromoLinks/PromoLinks';


export default function HomePage() {

    return (
        <div className={styles.main}>
            <Slider />
            <PromoLink />
            <FilterBookCategory />
        </div>
    )
}