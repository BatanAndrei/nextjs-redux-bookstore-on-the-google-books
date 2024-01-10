

import styles from './loginForm.module.css';
import { montserrat } from '../../app/layout';
import { loginReducer } from '@/redux/selectors';
import { useAppDispatch, useAppSelector } from '@/redux/store';


export default function LoginForm() {

    const dispatch = useAppDispatch();

    const heandleLogin = () => {
        dispatch(loginReducer())
    }

    return (
        <div className={styles.containerForm}>
            <h2 className={montserrat.className+' '+styles.titleLogin}>Log in</h2>
            <form className={styles.form}>
                <h2 className={montserrat.className+' '+styles.titleInput}>Email</h2>
                <input className={styles.input} type="email" name="email" placeholder="Enter your email..." />
                <h2 className={montserrat.className+' '+styles.titleInput}>Password</h2>
                <input className={styles.input} type="password" name="login" placeholder="Enter your password..." />
                <p className={montserrat.className+' '+styles.warn} >Your password must be at least 6 characters long</p>
                <button className={styles.button} type="submit" onClick={heandleLogin}>LOG IN</button>
            </form>
        </div>
    )
}