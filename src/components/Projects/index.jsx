import { Grid, Spacer } from "@nextui-org/react";
import Project from "./Project";
import { Section, Text, Title } from '../UI'
import styles from './index.module.css'

const listOfProjects = [
    {
        id: 1,
        name: 'Dartiles Dev - Blog',
        description: 'Un portal actualmente en desarrollo, inicialmente creado como blog personal y hoy en día con proyección para ser utilizado por más personas para compartir información del mundo IT',
        urlProject: 'https://dartiles.dev',
        urlCode: 'https://github.com/dartilesm/dartiles.dev',
        technologies: 'Svelte',
        image: '/dartiles.dev.jpg'
    }
]

const Projects = () => (
    <>
        <Spacer id="projects" />
        <Section>
            <Title>
                Proyectos Destacados
            </Title>
            <Grid.Container justify="center" className={styles.projectContainer}>
                {
                    listOfProjects
                        .map(project => {
                            return <Grid xs={12} key={project.id} direction="column">
                                <Project {...project}/>
                            </Grid>
                        })
                }
            </Grid.Container>
        </Section>
    </>
)

export default Projects