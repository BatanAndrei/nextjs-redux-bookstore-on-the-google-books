import styles from './cart.module.css'

export default function Cart() {
    return (
        <div className={styles.containerCart}>
            <h2 className={styles.titleCart}>SHOPPING CART</h2>
            <div className={styles.columnBlock}>
                <h3 className={styles.nameColumn}>ITEM</h3>
                <h3 className={styles.nameColumn}>QUANTITY</h3>
                <h3 className={styles.nameColumn}>PRICE</h3>
                <h3 className={styles.nameColumn}>DELIVERY</h3>
            </div>
        </div>
    )
}