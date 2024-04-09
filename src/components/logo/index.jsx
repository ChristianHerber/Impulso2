import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.css'

const Logo = () => {
    return (
        <Link href="/home">
            <Image src='/assets/logo.svg' className={styles.navbar__logo} width={159} height={54} alt='Logo Impulso'/>
        </Link>
    )
}

export default Logo