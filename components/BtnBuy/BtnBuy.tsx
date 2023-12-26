'use client'

import styles from './btnBuy.module.css';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { addItemsCartReducer, selectDataBooks } from '@/redux/selectors';
import { TpropsBtnBuy } from '@/types/types';


export default function BtnBuy({id}: TpropsBtnBuy) {

    const [btnBuyText, setBtnBuyText] = useState<boolean>(false);
    const dataListBooks = useAppSelector(selectDataBooks);
    const dispatch = useAppDispatch();
    
    
    const heandleBuyBook = (e: React.MouseEvent<HTMLElement>) => {

        let nodeTarget = e.target as HTMLDivElement;
        let indexDataSet = nodeTarget.dataset.btnbuy as string; 
        
        dispatch(addItemsCartReducer(dataListBooks.find(book => book.id === indexDataSet)));
        setBtnBuyText(() => !btnBuyText)
        e.stopPropagation();
    }


    return (
        <>
            <button className={styles.btnBuyNow} type="button" data-btnbuy={id} onClick={(e) => heandleBuyBook(e)}>{btnBuyText ? 'IN THE CART' : 'BUY NOW'}</button>
        </>
    )
}