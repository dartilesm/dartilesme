import { Grid, Spacer, StyledGridContainer } from "@nextui-org/react";
import { Section, Title } from '../../components/UI';
import { useTranslations } from 'next-intl';
import useUpdateHashOnIntersect from '../../hooks/useUpdateHashOnIntersect'
import Project from "./Project";

const listOfProjects = [
    {
        id: 1,
        name: 'Dartiles Dev - Blog',
        description: 'dartilesDev',
        urlProject: 'https://dartiles.dev',
        urlCode: 'https://github.com/dartilesm/dartiles.dev',
        technologies: 'Svelte',
        image: '/dartiles.dev.webp'
    },
    {
        id: 2,
        name: 'vue-stitches',
        description: 'vueStitches',
        urlProject: 'https://www.npmjs.com/package/vue-stitches',
        urlCode: 'https://github.com/dartilesm/vue-stitches',
        technologies: 'Vue, Javascript',
        image: '/vue-stitches.webp'
    }
]

const Projects = () => {
    const t = useTranslations('projects')
    const [elementRef] = useUpdateHashOnIntersect({ hash: 'projects'})

    return (
        <>
            <Spacer id="projects" />
            <Section ref={elementRef}>
                <Title>
                    {t('title')}
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