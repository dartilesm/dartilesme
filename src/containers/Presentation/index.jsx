import { Button } from "@nextui-org/react"
import MeImage from '../../assets/me.png'
import { Section, Text, Title } from "../../components/UI"
import { sectionStyles, StyledImage, StyledImageBackground, StyledImageContainer, StyledWelcomePresentation } from "./styles"


const Presentation = () => {
    const contact = () => {
        window.open("mailto:diego@dartiles.dev?subject=Quisiera ponerme en contacto contigo - dartiles.me");
    }

    return (
        <Section css={sectionStyles} main>
            <StyledWelcomePresentation>
                <Title main>
                    Bienvenido a mi portafolio
                </Title>
                <Text>
                    Te saluda Diego Artiles, <b>soy desarrollador frontend en Coco.</b> Me considero una persona proactiva y siempre en busca de crear nuevas cosas 🚀.
                </Text>
                <Button onClick={contact} size="md">
                    Contáctame
                </Button>
            </StyledWelcomePresentation>
            <StyledImageContainer>
                <StyledImage src={MeImage} alt="me" />
                <StyledImageBackground />
            </StyledImageContainer>
        </Section>
    )
}

export default Presentation