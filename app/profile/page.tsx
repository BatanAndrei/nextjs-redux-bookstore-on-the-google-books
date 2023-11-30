import styles from './profile.module.css';

export default function Profile() {
    return (
        <div className={styles.containerProfile}>
            <div className={styles.infoProfile}></div>
            <div className={styles.aboutProfile}>
                <h2 className={styles.aboutProfileTitle}>ABOUT ME</h2>
                <h3 className={styles.aboutProfileText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante consequat, ornare nisi et, ultrices libero. Nunc nibh dolor, maximus quis auctor nec, tempor quis ipsum. Proin mollis pellentesque nulla ac varius.</h3>
            </div>
        </div>
    )
}