import { Dispatch, SetStateAction } from 'react';
import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import ClassNames from 'classnames';

type IOpcao = typeof filtros[0];

interface Props{
    filtro: number | null,
    setFiltro: Dispatch<SetStateAction<number | null>>
}
export default function Filtros({filtro, setFiltro}:Props){

    function selecionarFiltros(opcao : IOpcao){
        if (opcao.id === filtro) {
            return setFiltro(null);
        }
        
        return setFiltro(opcao.id);
    }
    return(
        <div className={styles.filtros}>
            {filtros.map(opcao => (
                <button 
                    className={ClassNames({
                        [styles.filtros__filtro]: true,                        
                        [styles["filtros__filtro--ativo"]]: filtro === opcao.id
                    })}
                    key={opcao.id}
                    onClick={() => selecionarFiltros(opcao)}
                >
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}