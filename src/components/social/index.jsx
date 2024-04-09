import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.css'

const Social = ({icon, name, href}) => {
    return (
        <Link href={href} target='_blank' className={styles.link__item}>
            <div className={styles.item__icon}>
                <Image src={icon} width={32} height={32} alt={name} className={styles.item_image} />
            </div>
            <p className={styles.item__caption}>{name}</p>
        </Link>
    )
}

export default Social