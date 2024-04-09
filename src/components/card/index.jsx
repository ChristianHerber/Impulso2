import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({url, photo, alt, role, name}) => {
    return (
        <Link href={url}>
            <div className={styles.card}>
                <span className={styles.card__overlay}>
                    <Image className={styles.card__image} src={photo} width={120} height={120} alt={alt} />
                </span>
                <div className={styles.card_details}>
                    <p className={styles.card__role}>{role}</p>
                    <h2 className={styles.card__name}>{name}</h2>
                </div>
            </div>
        </Link>
    )
}

export default Card