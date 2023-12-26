"use client"

import styles from './cart.module.css'
import { selectCartItems } from '@/redux/selectors';
import Image from 'next/image';
import { montserrat, openSans } from '@/app/layout';
import { useAppSelector, useAppDispatch } from '@/redux/store';
import SvgPlus from '@/public/svgComponents/svgPlus';
import SvgMinus from '@/public/svgComponents/svgMinus';


export default function Cart() {

    const cartItems = useAppSelector(selectCartItems);
    //const dispatch = useAppDispatch();
    //console.log(cartItems)
    return (
        <div className={styles.containerCart}>
            <h2 className={styles.titleCart}>SHOPPING CART</h2>
            <div className={styles.columnBlock}>
                <h3 className={styles.nameColumn+' '+styles.item}>ITEM</h3>
                <h3 className={styles.nameColumn+' '+styles.quantity}>QUANTITY</h3>
                <h3 className={styles.nameColumn+' '+styles.price}>PRICE</h3>
                <h3 className={styles.nameColumn+' '+styles.delivery}>DELIVERY</h3>
            </div>
            {cartItems.map((item) => 
            <div className={styles.containerInfo}>
                <div className={styles.itemFoto}>
                    <Image className={`${item.volumeInfo?.imageLinks?.thumbnail ? styles.bookPositionImage : styles.bookPositionImageNone}`} src={`${item.volumeInfo?.imageLinks?.thumbnail}`} alt={`${item.volumeInfo?.title}`} width={102} height={145} />
                    <div className={styles.itemInfo}>
                        <h2 className={montserrat.className+' '+styles.bookPositionInfoTitle}>{item.volumeInfo?.title.length < 40 ? item.volumeInfo?.title.slice(0, 15) + '. . .' : item.volumeInfo?.title}</h2>
                        <h3 className={openSans.className+' '+styles.bookPositionInfoAuthor}>{item.volumeInfo?.authors}</h3>
                        <div className={`${item.volumeInfo?.averageRating ? styles.ratingBlock : styles.displayNone}`}>
                            <div className={`${item.volumeInfo?.averageRating === 1 ? styles.ratingBlockStarsAll : styles.displayNone}`}>
                                <div className={styles.ratingBlockStarsYellow}></div>
                                <div className={styles.ratingBlockStarsGrey}></div>
                                <div className={styles.ratingBlockStarsGrey}></div>
                                <div className={styles.ratingBlockStarsGrey}></div>
                                <div className={styles.ratingBlockStarsGrey}></div>
                            </div>
                            <div className={`${item.volumeInfo?.averageRating === 2 ? styles.ratingBlockStarsAll : styles.displayNone}`}>
                                <div className={styles.ratingBlockStarsYellow}></div>
                                <div className={styles.ratingBlockStarsYellow}></div>
                                <div className={styles.ratingBlockStarsGrey}></div>
                                <div className={styles.ratingBlockStarsGrey}></div>
                                <div className={styles.ratingBlockStarsGrey}></div>
                            </div>
                            <div className={`${item.volumeInfo?.averageRating === 3 ? styles.ratingBlockStarsAll : styles.displayNone}`}>
                                <div className={styles.ratingBlockStarsYellow}></div>
                                <div className={styles.ratingBlockStarsYellow}></div>
                                <div className={styles.ratingBlockStarsYellow}></div>
                                <div className={styles.ratingBlockStarsGrey}></div>
                                <div className={styles.ratingBlockStarsGrey}></div>
                            </div>
                            <div className={`${item.volumeInfo?.averageRating === 4 ? styles.ratingBlockStarsAll : styles.displayNone}`}>
                                <div className={styles.ratingBlockStarsYellow}></div>
                                <div className={styles.ratingBlockStarsYellow}></div>
                                <div className={styles.ratingBlockStarsYellow}></div>
                                <div className={styles.ratingBlockStarsYellow}></div>
                                <div className={styles.ratingBlockStarsGrey}></div>
                            </div>
                            <div className={`${item.volumeInfo?.averageRating === 5 ? styles.ratingBlockStarsAll : styles.displayNone}`}>
                                <div className={styles.ratingBlockStarsYellow}></div>
                                <div className={styles.ratingBlockStarsYellow}></div>
                                <div className={styles.ratingBlockStarsYellow}></div>
                                <div className={styles.ratingBlockStarsYellow}></div>
                                <div className={styles.ratingBlockStarsYellow}></div>
                            </div>
                            <h2 className={`${item.volumeInfo?.ratingsCount ? styles.ratingBlockCount : styles.displayNone}`}>{item.volumeInfo?.ratingsCount} review</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.quantityInfo}>
                    <button className={styles.button}><SvgMinus /></button>
                    <div className={montserrat.className+' '+styles.infoCount}>1</div>
                    <button className={styles.button}><SvgPlus /></button>
                </div>
                <div className={styles.wrapperPrice}>
                    <h3 className={`${item.saleInfo?.retailPrice?.amount ? styles.priceInfo : styles.displayNone}`}>&#36;{item.saleInfo?.retailPrice?.amount}</h3>
                </div>
                <h3 className={montserrat.className+' '+styles.deleveryInfo}>Shipping: delivery</h3>
            </div>)}
        </div>
    )
}