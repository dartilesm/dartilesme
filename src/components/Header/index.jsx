import { Row } from "@nextui-org/react"
import { SOCIAL_MEDIA_LIST } from "../../constants/social-medias"
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

const Header = () => {
    const [isOnScrollPosition] = useScrollPosition({ scrollPos: 860 })

    return (
        <StyledHeader blur={isOnScrollPosition}>
            <Section main css={{ width: '100%' }}>
                <Row align="center">
                    <Menu links={SOCIAL_MEDIA_LIST} items={MENU_ITEMS} />
                </Row>
            </Section>
        </StyledHeader>
    )
}

export default Header