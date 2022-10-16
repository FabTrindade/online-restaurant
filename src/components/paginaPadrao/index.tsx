import { Outlet } from 'react-router-dom';
import styles from './PaginaPadrao.module.scss';
import stylesTema from 'styles/Tema.module.scss';

export default function PaginaPadrao() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa da massa preferida
                </div>
            </header>
            <div className={stylesTema.container}>
                <Outlet/>
            </div>
        </>
    );
}