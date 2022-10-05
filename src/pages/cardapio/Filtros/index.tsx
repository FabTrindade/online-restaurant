import filtros from './filtros.json'
import styles from './Filtros.module.scss'

type IOpcao = typeof filtros[0];

export default function Filtros(){

    function selecionarFiltros(opcao : IOpcao){

    }
    return(
        <div className={styles.filtros}>
            {filtros.map(opcao => (
                <button className={styles.filtros__filtros} key={opcao.id} onClick={() => selecionarFiltros(opcao)}>
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}