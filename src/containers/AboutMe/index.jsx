import { Grid, Row, Spacer } from "@nextui-org/react";
import { Section, Text, Title } from "../../components/UI";

const AboutMe = () => (
    <>
        <Spacer id="about-me" />
        <Section>
            <Title> Sobre mi</Title>
            <Row justify="center">
                <Grid sm={12} direction="column">
                    <Text>
                        Mi nombre es Diego Artiles, soy un <b>desarrollador especializado en el Frontend</b> con 5 años de experiencia. 👨‍💻
                    </Text>
                    <Text>
                        <b>Una de mis metas 🏅, es hacer servicios o aplicaciones útiles para las personas,</b> además de esto, disfruto y me encanta crear cosas nuevas. 😍
                    </Text>
                    <Text>
                        Me considero una persona muy proactiva con fuertes habilidades para identificar y resolver problemas. 🤩
                    </Text>
                    <Text>
                        Además de la programación, <b>me llevo bien con la edición de videos y me gusta tomar buenas fotos 📷.</b> Por otro lado me encanta viajar ✈, conocer lugares nuevos 🌴 y diversas culturas 🙆‍♂️. 
                    </Text>
                </Grid>
            </Row>
        </Section>
    </>
)

export default AboutMe