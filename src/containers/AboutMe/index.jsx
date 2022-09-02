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
                        Además de trabajar como Frontend Developer, tengo conocimientos en otras areas como <strong>Backend (Node.js - NestJS)</strong> y <strong>Mobile (Ionic - React Native)</strong>
                    </Text>
                    <Text>
                        <strong>Una de mis metas 🏅, es hacer servicios o aplicaciones útiles para las personas,</strong> además de esto, disfruto y me encanta crear cosas nuevas. 😍
                    </Text>
                    <Text>
                        Cuento con fuertes habilidades para identificar y resolver problemas. 👨‍💻
                    </Text>
                    <Text>
                        Además de la programación, <strong>me llevo bien con la edición de videos y me gusta tomar buenas fotos 📷.</strong> Por otro lado me encanta viajar ✈️, conocer lugares nuevos 🌴 y diversas culturas 🙆‍♂️. 
                    </Text>
                </Grid>
            </Row>
        </Section>
    </>
)

export default AboutMe