import { Button, styled } from "@nextui-org/react"
import { Section, Text, Title } from "../../components/UI"
import MeImage from '../../assets/me.png'
import styles from './index.module.css'

const sectionStyles = {
    height: 'calc(100vh - 100px)',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    '@smMax': {
        flexDirection: 'column-reverse',
        
    }
}

const ImageContainerStyled = styled('div', {
    height: '400px',
    width: '400px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
})

const ImageBackgroundStyled = styled('div', {
    borderRadius: '50%',
    background: '#060609',
    aspectRatio: '1 / 1',
    width: '300px',
    height: '300px',
    bottom: 0,
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
})

const ImageStyled = styled('img', {
    clipPath: 'ellipse(42% 46%)',
    width: '400px',
    height: '400px',
    zIndex: 1,
    objectFit: 'cover'
})


const Presentation = () => {
    const contact = () => {
        window.open("mailto:diego@dartiles.dev?subject=Quisiera ponerme en contacto contigo - dartiles.me");
    }

    return (
        <Section css={sectionStyles} main>
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
            <ImageContainerStyled>
                <ImageStyled src={MeImage} alt="me" />
                <ImageBackgroundStyled />
            </ImageContainerStyled>
        </Section>
    )
}

export default Presentation