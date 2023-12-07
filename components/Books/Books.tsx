import { useEffect } from "react";
import { fetchBooks } from '@/redux/fetchGet';
import { useAppSelector, useAppDispatch } from '@/redux/store';
import { selectDataBooks, selectLoadParams } from '@/redux/selectors';
import styles from './books.module.css';


export default function Books() {

    const loadParams = useAppSelector(selectLoadParams);
    const dataBooks = useAppSelector(selectDataBooks);
    const dispatch = useAppDispatch();

    let listBooks = dataBooks.items;
    
    console.log(dataBooks);

    useEffect(() => {
        dispatch(fetchBooks(loadParams))
    }, [loadParams])
    
    return (
        <div className={styles.block}>
           {listBooks?.map((item, index) => <div key={index} className={styles.book}>{item.id}</div>)}
        </div>
    )
}







