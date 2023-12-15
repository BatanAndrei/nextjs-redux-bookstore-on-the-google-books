"use client";

import styles from './filterBooksCategory.module.css';
import { useAppSelector, useAppDispatch } from '@/redux/store';
import { selectCategoryParams } from '@/redux/selectors';
import { montserrat } from '@/app/layout';
import Books from '@/components/Books/Books';


export default function FilterBooksCategory() {
    
    const category = useAppSelector(selectCategoryParams);

 
    return (
        <div className={styles.containerShowcase}>
            <div className={styles.categoryBooks}>
                <ul className={montserrat.className+ ' ' +styles.categoryBooksList}>
                  {category.map((item, index) => <li key={index} className={styles.categoryBooksItem }>{item}</li>)}
                </ul>
            </div>
            <Books />
        </div>
    )
}