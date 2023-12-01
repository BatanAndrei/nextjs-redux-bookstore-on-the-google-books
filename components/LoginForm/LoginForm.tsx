import styles from './loginForm.module.css';
import { montserrat } from '../../app/layout';


export default function LoginForm() {
    return (
        <div className={styles.containerForm}>
            <h2 className={montserrat.className+' '+styles.titleLogin}>Log in</h2>
            <form className={styles.form}>
                <h2 className={montserrat.className+' '+styles.titleInput}>Email</h2>
                <input className={styles.input} type="email" name="email" required placeholder="Enter your email..." />
                <h2 className={montserrat.className+' '+styles.titleInput}>Password</h2>
                <input className={styles.input} type="password" name="login" required placeholder="Enter your password..." />
                <p className={montserrat.className+' '+styles.warn} >Your password must be at least 6 characters long</p>
                <button className={styles.button} type="submit">LOG IN</button>
            </form>
        </div>
    )
}