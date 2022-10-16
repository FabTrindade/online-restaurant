import Menu from 'components/menu';
import Cardapio from 'pages/cardapio/Index';
import Inicio from 'pages/inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './Routes.module.scss';

export default function AppRoutes() {
    return (
        <main>
            <Router>
                <Menu />
                <header className={styles.header}>
                    <div className={styles.header__text}>
                        A casa da massa preferida
                    </div>
                </header>
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/cardapio' element={<Cardapio />} />
                </Routes>
            </Router>
        </main>
    );
}