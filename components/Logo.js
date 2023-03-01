import logo from '../asset/logo.png'
import Image from 'next/image'
import styles from '../styles/General.module.css'

export const Logo = () => {

    return (
        <div className={styles.logo}>
            <sup>ADMIN</sup>&nbsp;&nbsp;
            <Image
                src={logo}
                alt="logo"
                width={85}
                height={45}
            />
            <br></br>
        </div>
    )
}