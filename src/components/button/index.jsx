import Link from 'next/link'
import styles from './style.module.css'

const Button = ({caption}) => {
    return (
        <Link href="#" className={styles.btn}>
            {caption}
        </Link>
    )
}

export default Button