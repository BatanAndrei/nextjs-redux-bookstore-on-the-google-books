import styles from './profile.module.css';

export default function Profile() {
    return (
        <div className={styles.containerProfile}>
            <div className={styles.infoProfile}></div>
            <div className={styles.aboutProfile}></div>
        </div>
    )
}