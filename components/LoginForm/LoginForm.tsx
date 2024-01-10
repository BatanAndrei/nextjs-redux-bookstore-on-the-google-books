

import styles from './loginForm.module.css';
import { montserrat } from '../../app/layout';
import { loginReducer, selectEmailDirty, selectPasswordDirty, selectEmailError, selectPassError, emailDirtyReducer, passDirtyReducer } from '@/redux/selectors';
import { useAppDispatch, useAppSelector } from '@/redux/store';


export default function LoginForm() {

    const dispatch = useAppDispatch();

    const emailDirty = useAppSelector(selectEmailDirty);
    const passDirty = useAppSelector(selectPasswordDirty);
    const emailError = useAppSelector(selectEmailError);
    const passError = useAppSelector(selectPassError);

    const blurHeandler = (e: React.FocusEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'email': 
                dispatch(emailDirtyReducer());
                break;

            case 'password':
                dispatch(passDirtyReducer());
                break;
        }
    }

    const heandleLogin = (e: React.MouseEvent<HTMLElement>) => {
        dispatch(loginReducer());
        e.preventDefault();
    }

    return (
        <div className={styles.containerForm}>
            <h2 className={montserrat.className+' '+styles.titleLogin}>Log in</h2>
            <form className={styles.form}>
                <h2 className={montserrat.className+' '+styles.titleInput}>Email</h2>
                <input onBlur={e => blurHeandler(e)} className={styles.input} type="email" name="email" placeholder="Enter your email..." />
                {(emailDirty && emailError) && <p className={montserrat.className+' '+styles.warn}>{emailError}</p>}
                <h2 className={montserrat.className+' '+styles.titleInput}>Password</h2>
                <input onBlur={e => blurHeandler(e)} className={styles.input} type="password" name="password" placeholder="Enter your password..." />
                {(passDirty && passError) && <p className={montserrat.className+' '+styles.warn}>{passError}</p>}
                <button className={styles.button} type="submit" onClick={(e) => heandleLogin(e)}>LOG IN</button>
            </form>
        </div>
    )
}