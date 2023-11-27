import styles from '@/app/components/Slider/slider.module.css';
import Image from 'next/image';
import banner_1 from '@/public/images/banner_1.png';
import banner_2 from '@/public/images/banner_2.png';
import banner_3 from '@/public/images/banner_3.png';


export default function Slider() {
    return (
        <div>
            <Image src={banner_1} alt='banner_1' width={1120} height={702} />
        </div>
    )
}