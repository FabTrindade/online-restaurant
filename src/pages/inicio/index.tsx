import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';

export default function Inicio() {
    let pratosRecomendados =[...cardapio];
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);
    return (
        <section>
            <h3 className={stylesTema.titulo}>
                Recomendações da cozinha
            </h3>
            <div className={styles.recomendados}>
                {pratosRecomendados.map(item => (
                    <div key={item.id} className={styles.recomendado}>
                        <div className={styles.recomendado__imagem}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button className={styles.recomendado__botao}>
                            Ver mais
                        </button>
                    </div>
                ))}

            </div>
            <h3 className={stylesTema.titulo}>
                Nossa Casa
            </h3>
            <div className={styles.nossaCasa}>
                <img src={nossaCasa} alt="imagem_nossa_casa" />
                <div className={styles.nossaCasa__endereco}>
                    Rua da Nossa Casa <br/> Vila Nossa Casa-MG
                </div>
            </div>
        </section>
    );
}