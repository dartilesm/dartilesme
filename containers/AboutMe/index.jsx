import { Grid, Row, Spacer } from "@nextui-org/react";
import RecommendMe from "../../components/RecommendMe/RecommendMe";
import { Section, Text, Title } from "../../components/UI";
import useUpdateHashOnIntersect from "../../hooks/useUpdateHashOnIntersect";
import { GradientBackground } from "./styles";

const AboutMe = () => {
    const [elementRef] = useUpdateHashOnIntersect({ hash: 'about-me'})

    return (
        <>
            <Spacer id="about-me" />
            <Section ref={elementRef}>
                <Title>Sobre mi</Title>
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
                <Spacer y={2} />
                <RecommendMe css={{ margin: "auto" }}/>
                <GradientBackground css={{ height: 150, width: "25%", position: 'absolute', bottom: 160, left: "50%", transform: "translateX(-50%)", zIndex: 1 }}/>
                <Spacer y={3} />
            </Section>
        </>
    )
}

export default AboutMe