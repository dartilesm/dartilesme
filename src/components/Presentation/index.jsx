import { Button } from "@nextui-org/react"
import { Section, Text, Title } from "../UI"
import styles from './index.module.css'

const Presentation = () => {
    const contact = () => {
        window.open("mailto:diego@dartiles.dev?subject=Quisiera ponerme en contacto contigo - dartiles.me");
    }

    return (
        <Section className={styles.presentation} main>
            <div className={styles.welcome}>
                <Title main>
                    Bienvenido a mi portafolio
                </Title>
                <Text>
                    Te saluda Diego Artiles, <b>soy desarrollador frontend en Coco.</b> Me considero una persona proactiva y siempre en busca de crear nuevas cosas 🚀.
                </Text>
                <Button onClick={contact} size="md">
                    Contáctame
                </Button>
            </div>
        </Section>
    )
}

export default Presentation