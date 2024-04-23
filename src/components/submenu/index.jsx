import Topic from '../topic'
import Card from '../card'
import styles from './styles.module.css'

const SubMenu = ({isVisible}) => {
    return (
        <div className={`${styles.submenu} ${isVisible}`}>
            <div className={styles.submenu__topics}>

                <Topic 
                    title="Maturidade Organizacional" 
                    content="O futuro do trabalho não é apensa tech, como muitos pensam, É humano e tech"
                />

                <Topic 
                    title="Lideranças" 
                    content="Pessoas que mantém nossas relações mais equilibradas, diversas e sustentáveis."
                />

                <Topic 
                    title="Mídia" 
                    content="Somos reconhecidos pelo impacto que geramos por onde vamos."
                />

                <Topic 
                    title="Podcasts da Impulso" 
                    content="Discussões, insights e estratégias através dos podcasts produzidos pela Impulso."
                />

            </div>

            <div className={styles.submenu__peoples}>

                <Card 
                    url="/single/sylvestre"
                    photo="/assets/sylvestre.jpg" 
                    alt="CEO - Sylvestre Mergulhão"
                    role="CEO"
                    name="Sylvestre Mergulhão"
                />

                <Card 
                    url="/single/karine"
                    photo="/assets/karine.jpg" 
                    alt="CPO - Karine Silveira"
                    role="CPO"
                    name="Karine Silveira"
                />

                <Card 
                    url="/single/rafael"
                    photo="/assets/rafael.jpg" 
                    alt="CINO - Rafael Miranda"
                    role="CINO"
                    name="Rafel Miranda"
                />
                
                <Card 
                    url="/single/marcio"
                    photo="/assets/marcio.jpg" 
                    alt="CTO - Márcio Sena"
                    role="CTO"
                    name="Márcio Sena"
                />

            </div>
        </div>
    )
}

export default SubMenu 