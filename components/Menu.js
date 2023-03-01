
import styles from '@/styles/Home.module.css'


export const Menu = (props) => {

    if (props.sect != 'login') {
        return (
            <>
                <label className={styles.menu} onClick={() => props.retorno('gravel')}>GRAVIÈRES</label>
                <label className={styles.menu} onClick={() => props.retorno('prix')}>PRIX</label>
                <label className={styles.menu} onClick={() => props.retorno('enterprises')}>TRANSPORTEURS</label>
                <label className={styles.menu} onClick={() => props.retorno('orders')}>BULLETINS</label>
                <label className={styles.menu} onClick={() => props.retorno('reports')}>RAPPORTS</label>
            </>


        )
    }
}

