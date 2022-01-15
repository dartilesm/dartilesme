import { Grid, Spacer } from "@nextui-org/react"
import { SiAngular, SiCypress, SiIonic, SiJest, SiNestjs, SiReact, SiRollupdotjs, SiSvelte, SiTestinglibrary, SiVite, SiVuedotjs, SiWebpack } from 'react-icons/si'
import { Section, Subtitle, Text, Title } from "../UI"
import styles from './index.module.css'
import TechnologyItem from "./TechnologyItem"


const Technologies = () => (
    <>
        <Spacer id="technologies"/>
        <Section>
            <Title>
                Tecnologías
            </Title>
            <Text >
                De manera resumida les dejo algunas de las tecnologías o herramientas con las que he trabajado.
            </Text>
            <Spacer y={2} />
            <Grid.Container sm={12} justify="center" wrap="wrap" className={styles.skillsContainer}>
                <Grid sm={12} direction="column" className={styles.skills}>
                    <Subtitle>
                        Frameworks/librerías
                    </Subtitle>
                    <Grid.Container gap={2} wrap="wrap">
                        <Grid className={styles.skill}>
                            <TechnologyItem 
                                icon={<SiAngular size="4rem" color="#dd0031" />}
                                name="Angular"
                            />
                        </Grid>
                        <Grid className={styles.skill}>
                            <TechnologyItem 
                                icon={<SiIonic size="4rem" color="#3880ff" />}
                                name="Ionic"
                            />
                        </Grid>
                        <Grid className={styles.skill}>
                            <TechnologyItem 
                                icon={<SiReact size="4rem" color="#60dafc" />}
                                name="React"
                            />
                        </Grid>
                        <Grid className={styles.skill}>
                            <TechnologyItem 
                                icon={<SiSvelte size="4rem" color="#ff3c00" />}
                                name="Svelte"
                            />
                        </Grid>
                        <Grid className={styles.skill}>
                            <TechnologyItem 
                                icon={<SiVuedotjs size="4rem" color="#41b883" />}
                                name="Vue"
                            />
                        </Grid>
                        <Grid className={styles.skill}>
                            <TechnologyItem 
                                icon={<SiNestjs size="4rem" color="#e0234e" />}
                                name="NestJS"
                            />
                        </Grid>
                    </Grid.Container>
                </Grid>
                <Grid sm={12} direction="column" className={styles.skills}>
                    <Subtitle>
                        Testing
                    </Subtitle>
                    <Grid.Container gap={2} wrap="wrap">
                        <Grid className={styles.skill}>
                            <TechnologyItem 
                                icon={<SiJest size="4rem" color="#99424f"/>}
                                name="Jest"
                            />
                        </Grid>
                        <Grid className={styles.skill}>
                            <TechnologyItem 
                                icon={<SiTestinglibrary size="4rem" color="#eb3938"/>}
                                name="Testing Lib."
                            />
                        </Grid>
                        <Grid className={styles.skill}>
                            <TechnologyItem 
                                icon={<SiCypress size="4rem" color="#ffffff" />}
                                name="Cypress"
                            />
                        </Grid>
                    </Grid.Container>
                </Grid>
                <Grid sm={12} direction="column" className={styles.skills}>
                    <Subtitle>
                        Empaquetadores Webs
                    </Subtitle>
                    <Grid.Container gap={2} wrap="wrap">
                        <Grid className={styles.skill}>
                            <TechnologyItem 
                                icon={<SiWebpack size="4rem" color="#84c6e8"/>}
                                name="Webpack"
                            />
                        </Grid>
                        <Grid className={styles.skill}>
                            <TechnologyItem 
                                icon={<SiRollupdotjs size="4rem" color="#e73334"/>}
                                name="Rollup"
                            />
                        </Grid>
                        <Grid className={styles.skill}>
                            <TechnologyItem 
                                icon={<SiVite size="4rem" color="#ffc71f" />}
                                name="Vite"
                            />
                        </Grid>
                    </Grid.Container>
                </Grid>
            </Grid.Container>
            <Spacer y={4} />
        </Section>
    </>
)

export default Technologies