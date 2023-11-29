"use client"

import Image from 'next/image';
import styles from './slider.module.css';
import { sliderData } from '@/app/datas/sliderData';
import { useState, useEffect } from 'react';
import { IdataSlider } from '@/app/types/typesSlider';


export default function Slider() {

    const [images, setImages] = useState<IdataSlider[]>(sliderData);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    
    const autoPlay = () => {
        if(currentIndex !== images.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        }else if(currentIndex === images.length - 1) {
            setCurrentIndex(0);
        }
    }
useEffect(() => {
    let intervalId = setInterval(() => {
        autoPlay()
        }, 5000);
        return () => clearInterval(intervalId);
    }, [currentIndex]); 

    const moveDote = (index: number) => {
        setCurrentIndex(index)
    }

    return (
        <div className={styles.containerSlider}>
            {images.map((item, itemIndex) => {

                return (
                    <div className={currentIndex === itemIndex ? styles.positionActive : styles.positionSlide} key={item.id}>
                        <Image src={item.image} alt={item.image} width={1120} height={702}></Image>
                    </div>
                )
    })}
            <div className={styles.containerDots}>
                {Array.from({length: 3}).map((item, index) => {

                    return (
                        <div key={index} onClick={() => moveDote(index)}
                        className={currentIndex === index ? styles.activeDote : styles.dot}>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

