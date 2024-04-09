import styles from './styles.module.css'

const Topic = ({title, content}) => {
    return (
        <article className={styles.article}>
            <h4 className={styles.article__title}>{title}</h4>
            <p className={styles.article__content}>{content}</p>
        </article>
    )
}

export default Topic