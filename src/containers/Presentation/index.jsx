import { Button, Grid, Link } from "@nextui-org/react"
import { FiArrowRight } from "react-icons/fi"
import MeImage from '../../assets/me.png'
import { Section, Text, Title } from "../../components/UI"
import { SOCIAL_MEDIA_LIST } from "../../constants/social-medias"
import { sectionStyles, StyledImage, StyledImageBackground, StyledImageContainer, StyledWelcomePresentation } from "./styles"


const Presentation = () => {
    const contact = () => {
        window.open("mailto:diego@dartiles.dev?subject=Quisiera ponerme en contacto contigo - dartiles.me");
    }

    return (
        <Section css={sectionStyles}>
            <StyledWelcomePresentation>
                <Text css={{ paddingBottom: 0 }}>¡Hola 👋! Soy</Text>
                <Title main css={{ paddingBottom: 10, margin: 0 }}>
                    Diego Artiles
                </Title>
                <Text 
                    css={{ 
                        fontSize: "$md",
                        padding: "$xs 0 $md 0",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        color: "white",
                        letterSpacing: "2px",
                        "@mdMax": {
                            fontSize: "$sm",
                            paddingBottom: "$sm"
                        }
                    }}
                >Frontend Developer</Text>
                <Text>
                    Te saluda Diego Artiles, <b>soy desarrollador frontend en Coco.</b> Me considero una persona proactiva y siempre en busca de crear nuevas cosas 🚀.
                </Text>
                <Grid.Container css={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <Grid>
                        <Button onClick={contact} size="md" iconRight={<FiArrowRight />}>
                            Contáctame
                        </Button>
                    </Grid>
                    {
                        SOCIAL_MEDIA_LIST.map(({ href, icon, name }) => (
                            <Grid css={{ display: 'flex', alignItems: 'center' }} key={name}>
                                <Link href={href} target='_blank' rel='noreferer' css={{ color: 'white !important' }}>
                                    {icon}
                                </Link>
                            </Grid>
                        ))
                    }
                </Grid.Container>
            </StyledWelcomePresentation>
            <StyledImageContainer>
                <StyledImage src={MeImage} alt="me" />
                <StyledImageBackground />
            </StyledImageContainer>
        </Section>
    )
}

export default Presentation