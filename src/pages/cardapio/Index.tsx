import styles from './Cardapio.module.scss'
import {ReactComponent as Logo} from 'assets/logo.svg'

export default function Cardapio(){
    return(
        <main>
            <nav className={styles.menu}>
                <Logo/>
                Aluroni
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                A casa da massa preferida
                </div>
            </header>
        </main>
    )
}