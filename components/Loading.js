import spinner from '../asset/spinner.gif'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export const Loading = () => {

    return (
        <main className={styles.main}>

            <Image
                src={spinner}
                alt="logo"
                width={45}
                height={45}
                className={styles.lg}
            />
            &nbsp;&nbsp;&nbsp;
            <sup className={styles.patientez}>...patientez</sup>
        </main>

    )
}