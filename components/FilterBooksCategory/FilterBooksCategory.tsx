"use client";

import styles from './filterBooksCategory.module.css';
import { listCategories } from '@/datas/categoryData';
import { useState } from 'react';
import { montserrat } from '@/app/layout';
import Books from '@/components/Books/Books';


export default function FilterBooksCategory() {
    const [categoryState, setCategoryState] = useState<string[]>(listCategories);
    const [categoryIndex, setCategoryIndex] = useState<number>(0);

    const moveCategory = (index: number) => {
        setCategoryIndex(index)
    }

    return (
        <div className={styles.containerShowcase}>
            <div className={styles.categoryBooks}>
                <ul className={montserrat.className+ ' ' +styles.categoryBooksList}>
                    {categoryState.map((item, index) => <li key={index} onClick={() => moveCategory(index)} className={categoryIndex === index ? styles.categoryActive : styles.categoryBooksItem }>{item}</li>)}
                </ul>
            </div>
            <Books />
        </div>
    )
}