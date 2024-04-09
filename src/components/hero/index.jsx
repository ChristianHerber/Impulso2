'use client'

import styles from './styles.module.css'
import Image from 'next/image'
import Social from '../social'
import { useParams } from 'next/navigation'

const Hero = () => {

    const params = useParams()

    return (
        <>
        <div className={styles.hero}>
            <div className={styles.hero__overlay}></div>
                <video autoPlay muted playsInline className={styles.hero__video}>
                    <source src="/assets/marcio.mp4" type="video/mp4" />
                    <Image src="/assets/marcio-bg.jpg" className={styles.hero__video} width={1320} height={548} alt="CTO - Márcio Sena" />
                </video>
        </div>

        <div className={styles.info}>
            <Image src={`/assets/${params.name}.svg`} width={120} height={120} alt="" className={styles.info__photo} />
            <div className={styles.info__description}>
                <h4 className={styles.info__title}>
                    Olá, sou o Márcio Sena
                </h4>
                <p className={styles.info__content}>
                    CTO e Diretor de Comunidades na Impulso Conectando pessoas e tecnologias para grandes transformações. 🚀
                </p>
            </div>
        </div>

        <div className={styles.hero__description}>
            <p>Ajudo líderes e profissionais tech que reconhecem os desafios que enfrentam e valorizam a confiança nas pessoas.</p>
        </div>

        <div className={styles.hero__links}>
            <p className={styles.link__title}>Confira onde compartilho e conecte-se comigo:</p>

            <div className={styles.link__wrap}>

                <Social
                    href="https://instagram.com/omarciovsena"
                    icon="/assets/instagram.svg"
                    name="Instagram"
                />

                <Social
                    href="https://www.linkedin.com/in/omarciovsena/"
                    icon="/assets/linkedin.png"
                    name="Linkedin"
                />

                <Social
                    href="https://twitter.com/omarciovsena"
                    icon="/assets/x-twitter.png"
                    name="X Twitter"
                />

                <Social
                    href="#"
                    icon="/assets/telegram.png"
                    name="Telegram"
                />

                <Social
                    href="https://medium.com/@marciovsena"
                    icon="/assets/medium.png"
                    name="Medium"
                />

                <Social
                    href="#"
                    icon="/assets/podcast.png"
                    name="Podcast Hi Tech com Márcio Sena"
                />

                <Social
                    href="#"
                    icon="/assets/podcast-karine.png"
                    name="Podcast People Tech com Karine Silveira"
                />

                <Social
                    href="#"
                    icon="/assets/impulso-short.png"
                    name="Curso Liderança de Alto Impacto"
                />

                <Social
                    href="#"
                    icon="/assets/impulso-short.png"
                    name="Newsletter Líder de Alto Impacto"
                />

                <Social
                    href="https://impulso.link/newsletter-confianca"
                    icon="/assets/impulso-short.png"
                    name="Confiança radical"
                />

                <Social
                    href="https://calendly.com/omarciovsena/30min"
                    icon="/assets/cafe.png"
                    name="Vamos tomar um café?"
                />
            </div>
        </div>
        </>
    )
}

export default Hero