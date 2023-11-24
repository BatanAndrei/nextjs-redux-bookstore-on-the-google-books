import styles from './page.module.css';
import Slider from '@/app/components/Slider/Slider';


export default function HomePage() {
  return (
    <div className={styles.main}><Slider /></div>
  )
}