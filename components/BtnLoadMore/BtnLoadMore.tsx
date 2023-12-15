'use client'

import styles from './btnLoadMore.module.css';
import { useAppSelector, useAppDispatch } from '@/redux/store';
import { loadDataReducer } from '@/redux/selectors';


export default function BtnLoadMore() {

    const dispatch = useAppDispatch();

    return (
        <>
            <button onClick={() => dispatch(loadDataReducer(6))} className={styles.btnLoadMore} type="button">Load more</button>
        </>
    )
}
