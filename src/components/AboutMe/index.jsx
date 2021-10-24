import { Button, Grid, Link, Row, Spacer, Text } from "@nextui-org/react";
import { FiArrowDown } from "react-icons/fi";
import styles from './index.module.css'

const AboutMe = () => (
    <>
        <Spacer id="about-me" />
        <Spacer y={4} />
        <Text h2 align="center" color="white">
            Sobre mi
        </Text>
        <Spacer y={2}/>
        <Row justify="center">
            <Grid sm={12} md={8} direction="column" className={styles.aboutMe}>
                <Text color="#f6f6f6" size="1.1rem" margin={20}>
                    Mi nombre es Diego Artiles, soy un <b>desarrollador especializado en el Frontend</b> con 5 años de experiencia. 👨‍💻
                </Text>
                <Text color="#f6f6f6" size="1.1rem" margin={20}>
                    <b>Una de mis metas 🏅, es hacer servicios o aplicaciones útiles para las personas,</b> además de esto, disfruto y me encanta crear cosas nuevas. 😍
                </Text>
                <Text color="#f6f6f6" size="1.1rem" margin={20}>
                    Me considero una persona muy proactiva con fuertes habilidades para identificar y resolver problemas. 🤩
                </Text>
                <Text color="#f6f6f6" size="1.1rem" margin={20}>
                    Además de la programación, <b>me llevo bien con la edición de videos y me gusta tomar buenas fotos 📷.</b> Por otro lado me encanta viajar ✈, conocer lugares nuevos 🌴 y diversas culturas 🙆‍♂️. 
                </Text>
                <Grid className={styles.callToAction}>
                    <Button rounded color="secondary" iconRight={<FiArrowDown />} auto>
                        <Link href="#history">¿Te cuento mi historia?</Link>
                    </Button>
                </Grid>
            </Grid>
        </Row>
    </>
)

export default AboutMe