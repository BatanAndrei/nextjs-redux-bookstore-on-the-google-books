import styles from './cart.module.css'

export default function Cart() {
    return (
        <div className={styles.containerCart}>
            <h2 className={styles.titleCart}>SHOPPING CART</h2>
            <div className={styles.columnBlock}>
                <h3 className={styles.nameColumn+' '+styles.item}>ITEM</h3>
                <h3 className={styles.nameColumn+' '+styles.quantity}>QUANTITY</h3>
                <h3 className={styles.nameColumn+' '+styles.price}>PRICE</h3>
                <h3 className={styles.nameColumn+' '+styles.delivery}>DELIVERY</h3>
            </div>
        </div>
    )
}