import { useEffect } from "react";
import { fetchBooks } from '@/redux/fetchGet';
import { useAppSelector, useAppDispatch } from '@/redux/store';
import { selectDataBooks, selectLoadParams } from '@/redux/selectors';
import Image from "next/image";
import styles from './books.module.css';


export default function Books() {

    const loadParams = useAppSelector(selectLoadParams);
    const dataBooks = useAppSelector(selectDataBooks);
    const dispatch = useAppDispatch();

    let listBooks = dataBooks.items;
    
    console.log(listBooks);

    useEffect(() => {
        dispatch(fetchBooks(loadParams))
    }, [loadParams])
    
    return (
        <div className={styles.containerBooks}>
            {listBooks?.map((item, index) => <div key={index} className={styles.bookPosition}>
                <Image className={`${item.volumeInfo?.imageLinks?.thumbnail ? styles.bookPositionImage : styles.bookPositionImageNone}`} src={`${item.volumeInfo?.imageLinks?.thumbnail}`} alt={`${item.volumeInfo?.imageLinks?.thumbnail}`} width={212} height={310} />
            </div>)}
        </div>
    )
}







