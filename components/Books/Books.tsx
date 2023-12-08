import { useEffect } from "react";
import { fetchBooks } from '@/redux/fetchGet';
import { useAppSelector, useAppDispatch } from '@/redux/store';
import { selectDataBooks, selectLoadParams } from '@/redux/selectors';
import { montserrat, openSans } from '@/app/layout';
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
                <div className={styles.bookPositionInfo}>
                    <h2 className={openSans.className+' '+styles.bookPositionInfoAuthor}>{item.volumeInfo?.authors.join(', ')}</h2>
                    <h2 className={montserrat.className+' '+styles.bookPositionInfoTitle}>{item.volumeInfo?.title.length < 40 ? item.volumeInfo?.title.slice(0, 40) + '. . .' : item.volumeInfo?.title}</h2>
                    <div className={`${item.volumeInfo?.averageRating ? styles.ratingBlock : styles.ratingBlockNone}`}>
                        <div className={`${item.volumeInfo?.averageRating === 1 ? styles.ratingBlockStarsAll : styles.ratingBlockNone}`}>
                            <div className={styles.ratingBlockStarsYellow}></div>
                            <div className={styles.ratingBlockStarsGrey}></div>
                            <div className={styles.ratingBlockStarsGrey}></div>
                            <div className={styles.ratingBlockStarsGrey}></div>
                            <div className={styles.ratingBlockStarsGrey}></div>
                        </div>
                        <div className={`${item.volumeInfo?.averageRating === 2 ? styles.ratingBlockStarsAll : styles.ratingBlockNone}`}>
                            <div className={styles.ratingBlockStarsYellow}></div>
                            <div className={styles.ratingBlockStarsYellow}></div>
                            <div className={styles.ratingBlockStarsGrey}></div>
                            <div className={styles.ratingBlockStarsGrey}></div>
                            <div className={styles.ratingBlockStarsGrey}></div>
                        </div>
                        <div className={`${item.volumeInfo?.averageRating === 3 ? styles.ratingBlockStarsAll : styles.ratingBlockNone}`}>
                            <div className={styles.ratingBlockStarsYellow}></div>
                            <div className={styles.ratingBlockStarsYellow}></div>
                            <div className={styles.ratingBlockStarsYellow}></div>
                            <div className={styles.ratingBlockStarsGrey}></div>
                            <div className={styles.ratingBlockStarsGrey}></div>
                        </div>
                        <div className={`${item.volumeInfo?.averageRating === 4 ? styles.ratingBlockStarsAll : styles.ratingBlockNone}`}>
                            <div className={styles.ratingBlockStarsYellow}></div>
                            <div className={styles.ratingBlockStarsYellow}></div>
                            <div className={styles.ratingBlockStarsYellow}></div>
                            <div className={styles.ratingBlockStarsYellow}></div>
                            <div className={styles.ratingBlockStarsGrey}></div>
                        </div>
                        <div className={`${item.volumeInfo?.averageRating === 5 ? styles.ratingBlockStarsAll : styles.ratingBlockNone}`}>
                            <div className={styles.ratingBlockStarsYellow}></div>
                            <div className={styles.ratingBlockStarsYellow}></div>
                            <div className={styles.ratingBlockStarsYellow}></div>
                            <div className={styles.ratingBlockStarsYellow}></div>
                            <div className={styles.ratingBlockStarsYellow}></div>
                        </div>
                        <h2 className={`${item.volumeInfo?.ratingsCount ? styles.ratingBlockCount : styles.ratingBlockCountNone}`}>{item.volumeInfo?.ratingsCount} review</h2>
                    </div>
                </div>
            </div>)}
        </div>
    )
}







