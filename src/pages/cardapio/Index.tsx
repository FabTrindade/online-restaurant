import styles from './Cardapio.module.scss';
import Buscador from './buscador';
import { useState } from 'react';
import Filtros from './Filtros';
import Ordenador from './ordenador';
import Itens from './itens';

export default function Cardapio(){
    const [busca, setBusca] = useState('');
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState('');

    return(
        <main>
            <header className={styles.header}>
                <div className={styles.header__text}>
                A casa da massa preferida
                </div>
            </header>
            <header>
                <section className={styles.cardapio}>
                    <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                    <Buscador busca={busca} setBusca={setBusca}/>
                    <div className={styles.cardapio__filtros}>
                        <Filtros filtro = {filtro} setFiltro={setFiltro}/>
                        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>                        
                    </div>
                    <Itens busca={busca} filtro={filtro} ordenador={ordenador} />    
                </section>
            </header>
        </main>
    );
}