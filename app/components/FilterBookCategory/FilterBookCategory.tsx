import styles from '@/app/components/FilterBookCategory/filterBookCategory.module.css';


export default function FilterBookCategory() {

    return (
        <div className={styles.containerCategory}>
            <div className={styles.categoryBooks}>
                <ul className={styles.categoryBooksList}>
                    <li className={styles.categoryBooksItem+ ' ' +styles.active}>Architecture</li>
                    <li className={styles.categoryBooksItem}>Art & Fashion</li>
                    <li className={styles.categoryBooksItem}>Biography</li>
                    <li className={styles.categoryBooksItem}>Business</li>
                    <li className={styles.categoryBooksItem}>Crafts & Hobbies</li>
                    <li className={styles.categoryBooksItem}>Drama</li>
                    <li className={styles.categoryBooksItem}>Fiction</li>
                    <li className={styles.categoryBooksItem}>Food & Drink</li>
                    <li className={styles.categoryBooksItem}>Health & Wellbeing</li>
                    <li className={styles.categoryBooksItem}>History & Politics</li>
                    <li className={styles.categoryBooksItem}>Humor</li>
                    <li className={styles.categoryBooksItem}>Poetry</li>
                    <li className={styles.categoryBooksItem}>Psychology</li>
                    <li className={styles.categoryBooksItem}>Science</li>
                    <li className={styles.categoryBooksItem}>Technology</li>
                    <li className={styles.categoryBooksItem}>Travel & Maps</li>
                </ul>
            </div>
            <div className={styles.showecaseBooks}></div>
        </div>
    )
}