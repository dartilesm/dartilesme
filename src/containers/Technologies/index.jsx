import { Grid, Spacer } from "@nextui-org/react"
import { SiAngular, SiCypress, SiIonic, SiJest, SiNestjs, SiReact, SiRollupdotjs, SiSvelte, SiTestinglibrary, SiVite, SiVuedotjs, SiWebpack } from 'react-icons/si'
import { Section, Subtitle, Text, Title } from "../../components/UI"
import Skills from "./Skills"
import { StyledSkills, StyledSkillsContainer } from "./styles"

const frameworksList = [
    {
        icon: <SiAngular size="4rem" color="#dd0031" />,
        name: 'Angular'
    },
    {
        icon: <SiIonic size="4rem" color="#3880ff" />,
        name: 'Ionic'
    },
    {
        icon: <SiReact size="4rem" color="#60dafc" />,
        name: 'React'
    },
    {
        icon: <SiSvelte size="4rem" color="#ff3c00" />,
        name: 'Svelte'
    },
    {
        icon: <SiVuedotjs size="4rem" color="#41b883" />,
        name: 'Vue'
    },
    {
        icon: <SiNestjs size="4rem" color="#e0234e" />,
        name: 'NestJS'
    }
]

const testingList = [
    {
        name: 'Jest',
        icon: <SiJest size="4rem" color="#99424f"/>
    },
    {
        name: 'Testing Lib.',
        icon: <SiTestinglibrary size="4rem" color="#eb3938"/>
    },
    {
        name: 'Cypress',
        icon: <SiCypress size="4rem" color="#ffffff" />
    }
]

const bundlerList = [
    {
        name: 'Webpack',
        icon: <SiWebpack size="4rem" color="#84c6e8"/>
    },
    {
        name: 'Rollup',
        icon: <SiRollupdotjs size="4rem" color="#e73334"/>
    },
    {
        name: 'Vite',
        icon: <SiVite size="4rem" color="#ffc71f" />
    }
]



const Technologies = () => (
    <>
        <Spacer id="technologies"/>
        <Section>
            <Title>
                Tecnologías
            </Title>
            <Text>
                De manera resumida les dejo algunas de las tecnologías o herramientas con las que he trabajado.
            </Text>
            <Spacer y={2} />
            <StyledSkillsContainer sm={12} justify="center" wrap="wrap">
                <StyledSkills sm={12} direction="column">
                    <Subtitle>
                        Frameworks/librerías
                    </Subtitle>
                    <Grid.Container gap={2} wrap="wrap">
                        <Skills list={frameworksList} />
                    </Grid.Container>
                </StyledSkills>
                <StyledSkills sm={12} direction="column">
                    <Subtitle>
                        Testing
                    </Subtitle>
                    <Grid.Container gap={2} wrap="wrap">
                        <Skills list={testingList} />
                    </Grid.Container>
                </StyledSkills>
                <StyledSkills sm={12} direction="column">
                    <Subtitle>
                        Empaquetadores Webs
                    </Subtitle>
                    <Grid.Container gap={2} wrap="wrap">
                        <Skills list={bundlerList} />
                    </Grid.Container>
                </StyledSkills>
            </StyledSkillsContainer>
            <Spacer y={4} />
        </Section>
    </>
)

export default Technologies