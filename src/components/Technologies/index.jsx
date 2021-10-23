import { Col, Grid, Row, Spacer, Text } from "@nextui-org/react"
import { SiAngular, SiCypress, SiJest, SiNestjs, SiReact, SiSvelte, SiVuedotjs } from 'react-icons/si'
import styles from './index.module.css'
import TechnologyItem from "./TechnologyItem"


const Technologies = () => (
    <>
        <Text h2 align="center" color="white" id="projects">
            Tecnologías
        </Text>
        <Spacer y={2} />
        <Row justify="center">
            <Grid sm={12} md={8} direction="column">
                <Text color="white">
                    Estas son algunas de las tecnologías con las cuales he trabajadooo
                </Text>
            </Grid>
        </Row>
        <Spacer y={1} />
        <Row justify="center" wrap="wrap">
            <Grid sm={12} md={4} direction="column" className={styles.skills}>
                <Text h3 color="white">
                    Frameworks/librerías
                </Text>
                <Grid.Container gap={2} wrap="wrap">
                    <Grid className={styles.skill}>
                        <TechnologyItem 
                            icon={<SiAngular size="4rem" color="#dd0031" />}
                            name="Angular"
                        />
                    </Grid>
                    <Grid>
                        <TechnologyItem 
                            icon={<SiReact size="4rem" color="#60dafc" />}
                            name="React"
                        />
                    </Grid>
                    <Grid>
                        <TechnologyItem 
                            icon={<SiSvelte size="4rem" color="#ff3c00" />}
                            name="Svelte"
                        />
                    </Grid>
                    <Grid>
                        <TechnologyItem 
                            icon={<SiVuedotjs size="4rem" color="#41b883" />}
                            name="Vue"
                        />
                    </Grid>
                    <Grid>
                        <TechnologyItem 
                            icon={<SiNestjs size="4rem" color="#e0234e" />}
                            name="NestJS"
                        />
                    </Grid>
                </Grid.Container>
            </Grid>
            <Grid sm={12} md={4} direction="column" className={styles.skills}>
                <Text h3 color="white">
                    Testing
                </Text>
                <Grid.Container gap={2} wrap="wrap">
                    <Grid>
                        <TechnologyItem 
                            icon={<SiJest size="4rem" color="#99424f"/>}
                            name="Jest"
                        />
                    </Grid>
                    <Grid>
                        <TechnologyItem 
                            icon={<SiCypress size="4rem" color="#ffffff" />}
                            name="Cypress"
                        />
                    </Grid>
                </Grid.Container>
            </Grid>
        </Row>
        <Row>
            <Col>

            </Col>
            <Col>
            </Col>
        </Row>
    </>
)

export default Technologies