import { Row } from "@nextui-org/react"
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"
import useScrollPosition from "../../hooks/useScrollPosition"
import { Section } from '../UI'
import Menu from "./Menu"
import { StyledHeader } from './styles'


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
    const [isOnScrollPosition] = useScrollPosition({ scrollPos: 860 })

    return (
        <StyledHeader blur={isOnScrollPosition}>
            <Section main css={{ width: '100%' }}>
                <Row align="center">
                    <Menu links={MENU_LINKS} items={MENU_ITEMS} />
                </Row>
            </Section>
        </StyledHeader>
    )
}

export default Header