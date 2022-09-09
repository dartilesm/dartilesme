import { Grid, Spacer, StyledGridContainer } from "@nextui-org/react";
import { Section, Title } from '../../components/UI';
import useUpdateHashOnIntersect from '../../hooks/useUpdateHashOnIntersect'
import Project from "./Project";

const listOfProjects = [
    {
        id: 1,
        name: 'Dartiles Dev - Blog',
        description: 'Un portal actualmente en desarrollo, inicialmente creado como blog personal y hoy en día con proyección para ser utilizado por más personas para compartir información del mundo IT',
        urlProject: 'https://dartiles.dev',
        urlCode: 'https://github.com/dartilesm/dartiles.dev',
        technologies: 'Svelte',
        image: '/dartiles.dev.webp'
    },
    {
        id: 2,
        name: 'vue-stitches',
        description: 'Es un pequeño paquete de npm que ayuda a usar de una mejor manera Stitches en los proyectos de Vue. Stitches solo tiene una versión adapatada para React, así que para Vue estoy usando la versión Core.',
        urlProject: 'https://www.npmjs.com/package/vue-stitches',
        urlCode: 'https://github.com/dartilesm/vue-stitches',
        technologies: 'Vue, Javascript',
        image: '/vue-stitches.webp'
    }
]

const Projects = () => {
    const [elementRef] = useUpdateHashOnIntersect({ hash: 'projects'})

    return (
        <>
            <Spacer id="projects" />
            <Section ref={elementRef}>
                <Title>
                    Proyectos Destacados
                </Title>
                <StyledGridContainer justify="center">
                    {
                        listOfProjects
                            .map((project, index) => {
                                const isReverse = index % 2 === 0
                                return <Grid xs={12} key={project.id} direction="column">
                                    <Project project={project} reverse={isReverse} />
                                </Grid>
                            })
                    }
                </StyledGridContainer>
            </Section>
        </>
    )
}

export default Projects