import { Button, Col, Container, Grid, Link, Row, Text } from "@nextui-org/react"
import { useState } from "react"
import { FiGithub, FiLinkedin, FiMenu, FiTwitter, FiX } from "react-icons/fi"
import styles from './index.module.css'


const MENU_ITEMS = [
    {
        name: 'Sobre mi',
        href: '#about-me'
    },
    {
        name: 'Proyectos',
        href: '#projects'
    },
    {
        name: 'Historia',
        href: '#history'
    },
    {
        name: 'Tecnologías',
        href: '#technologies'
    }
]

const MENU_LINKS = [
    {
        name: 'Github',
        href: 'https://github.com/dartilesm',
        icon: <FiGithub size={20} />
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/dartiles',
        icon: <FiLinkedin size={20} />
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com/intent/follow?screen_name=dartilesm',
        icon: <FiTwitter size={20} />
    }
]

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const downloadCV = () => { 
        setIsOpenMenu(!isOpenMenu)
        window.open('/cv.pdf', '_blank') 
    }

    return (
        <Grid className={styles.header}>
            <Container>
                <Row align="center">
                    <Col className={styles.logoContainer} span={2}>
                        <img src="./logo3.png" alt="logo" width={40} />
                    </Col>
                    <Col className={styles.menuContainer}>
                        <Grid md={0} className={styles.mobileMenuButton} onClick={() => setIsOpenMenu(!isOpenMenu)}>
                            <Text color="white" size="1.2rem">
                                { isOpenMenu ? <FiX size={30} /> : <FiMenu size={30} /> }
                            </Text>
                        </Grid>
                        <Grid className={`${styles.mobileMenuContainer} ${isOpenMenu ? styles.open : ''}`} md={0}>
                            <Grid>
                                {
                                    MENU_ITEMS.map(({ name, href }) => 
                                        <Text color="white" size="1.2rem" key={name} onClick={() => setIsOpenMenu(!isOpenMenu)}>
                                            <Link href={href}>
                                                {name}
                                            </Link>
                                        </Text>
                                    )
                                }
                                {
                                    MENU_LINKS.map(({ name, icon, href }) => 
                                        <Text color="white" size="1.2rem" className={styles.links} key={name} onClick={() => setIsOpenMenu(!isOpenMenu)}>
                                            <Link href={href} target="_blank" rel="noreferer">
                                                {icon}
                                            </Link>
                                        </Text>
                                    )
                                }
                                <Button auto rounded className={styles.resumeButtton} onClick={downloadCV}>
                                    Descargar CV
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid xs={0} md={12} className={styles.desktopMenuContainer}>
                            {
                                MENU_ITEMS.map(({ name, href }) => 
                                    <Text color="white" size="1.2rem" key={name}>
                                        <Link href={href}>
                                            {name}
                                        </Link>
                                    </Text>
                                )
                            }
                            {
                                MENU_LINKS.map(({ name, icon, href }) => 
                                    <Text color="white" size="1.2rem" className={styles.links} key={name}>
                                        <Link href={href} target="_blank" rel="noreferer">
                                            {icon}
                                        </Link>
                                    </Text>
                                )
                            }
                            <Button auto rounded className={styles.resumeButtton} onClick={downloadCV}>
                                Descargar CV
                            </Button>
                        </Grid>
                    </Col>
                </Row>
            </Container>
        </Grid>
    )
}

export default Header