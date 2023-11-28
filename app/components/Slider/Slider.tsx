"use client"

import Image from 'next/image';
import styles from './slider.module.css';
import { sliderData } from '@/app/datas/sliderData';
import { useState, useEffect } from 'react';
import { IdataSlider } from '@/app/types/typesSlider';


export default function Slider() {
    const [items, setItems] = useState<IdataSlider[]>(sliderData);
    const [slide, setSlide] = useState<number>(0);

    const changeSlide = (direction = 1) => {   //устанавливает в sliderNumber = 2 или 0, 1, 2;
        let sliderNumber = 0;

        if(slide + direction < 0) {
            sliderNumber = items.length - 1; // 2
        } else {
            sliderNumber = (slide + direction) % items.length; // 0, 1, 2;
        }
    
        setSlide(sliderNumber); // slide === sliderNumber;
    }

    const goToSlide = (number: number) => {  
        setSlide(number % items.length);  // устанавливает остаток тн деления в slide
    };

    useEffect(() => {

    setInterval(() => {
        changeSlide(1);
        }, 5000);
    
    }, [slide]);

    return (
        <div>
            {items.map((item, index) => <div key={item.id} className={slide === index ? styles.activeSlide : styles.positionSlide}><Image src={item.image} alt={item.image} key={item.id} width={1120} height={702} /></div>)}
        </div>
    )
}

