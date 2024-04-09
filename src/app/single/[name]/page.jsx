import Menu from '../../../components/menu'
import Hero from '../../../components/hero'
import styles from '../../page.module.css'

export default function Single() {
    return (
        <div className={styles.container}>
            <Menu />
            <Hero />
        </div>
    );
}