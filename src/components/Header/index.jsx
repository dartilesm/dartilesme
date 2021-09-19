import { Row, Col, Container, Text, Link, Grid, Button } from "@nextui-org/react"
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"
import styles from './index.module.css'

const Header = () => (
    <Grid className={styles.header}>
        <Container>
            <Row align="center">
                <Col className={styles.logoContainer} span={2}>
                    <img src="./logo3.png" alt="logo" width={50} />
                </Col>
                <Col className={styles.menuContainer}>
                    <Text color="white" size="1.2rem">
                        <Link href="#projects">
                            Proyectos
                        </Link>
                    </Text>
                    <Text color="white" size="1.2rem">
                        <Link href="#">
                            Sobre mi
                        </Link>
                    </Text>
                    <Text color="white" size="1.2rem">
                        <Link href="#">
                            Historia
                        </Link>
                    </Text>
                    <Text color="white" size="1.2rem">
                        <Link href="#">
                            Tecnologías
                        </Link>
                    </Text>
                    <Text color="white" size="1.2rem" className={styles.links} target="_blank" rel="noreferer">
                        <Link href="https://github.com/dartilesm">
                            <FiGithub size={20} />
                        </Link>
                    </Text>
                    <Text color="white" size="1.2rem" className={styles.links} target="_blank" rel="noreferer">
                        <Link href="https://www.linkedin.com/in/dartiles/">
                            <FiLinkedin size={20} />
                        </Link>
                    </Text>
                    <Text color="white" size="1.2rem" className={styles.links} target="_blank" rel="noreferer">
                        <Link href="https://twitter.com/intent/follow?screen_name=dartilesm">
                            <FiTwitter size={20} />
                        </Link>
                    </Text>
                    <Button auto rounded className={styles.resumeButtton}>
                        Descargar CV
                    </Button>
                </Col>
            </Row>
        </Container>
    </Grid>
)

export default Header