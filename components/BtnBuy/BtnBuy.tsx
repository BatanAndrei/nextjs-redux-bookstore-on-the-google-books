'use client'

import styles from './btnBuy.module.css';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { addItemsCartReducer, deleteItemsCartReducer, selectDataBooks } from '@/redux/selectors';
import { TpropsBtnBuy } from '@/types/types';


export default function BtnBuy({id}: TpropsBtnBuy) {

    const [btnBuyTextToggle, setBtnBuyTextToggle] = useState<boolean>(false);
    const dataListBooks = useAppSelector(selectDataBooks);
    const dispatch = useAppDispatch();
    
    
    const heandleBuyBook = (e: React.MouseEvent<HTMLElement>) => {

        let nodeTarget = e.target as HTMLDivElement;
        let indexDataSet = nodeTarget.dataset.btnbuy as string; 

        setBtnBuyTextToggle(() => !btnBuyTextToggle);
        if(!btnBuyTextToggle) {
            dispatch(addItemsCartReducer(dataListBooks.find(book => book.id === indexDataSet)));
        }else {
            dispatch(deleteItemsCartReducer(indexDataSet));
        }
        
        e.stopPropagation();
    }


    return (
        <>
            <button className={styles.btnBuyNow} type="button" data-btnbuy={id} onClick={(e) => heandleBuyBook(e)}>{btnBuyTextToggle ? 'IN THE CART' : 'BUY NOW'}</button>
        </>
    )
}