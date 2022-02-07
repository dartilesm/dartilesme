import { Row, Text } from "@nextui-org/react"
import { useState } from "react"
import { FiGithub, FiLinkedin, FiMenu, FiTwitter, FiX } from "react-icons/fi"
import useScrollPosition from "../../hooks/useScrollPosition"
import { Section } from '../UI'
import {
    DesktopMenuContainerStyled,
    desktopMenuItemsStyles, HeaderStyled,
    LogoContainerStyled,
    MenuContainerStyled, MenuLinksStyled, MobileMenuButtonStyled,
    MobileMenuContainerStyled,
    MobileMenuGridStyled, ResumeButtonStyled
} from './styles'


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
    const [isOnScrollPosition] = useScrollPosition({ scrollPos: 860 })
    const downloadCV = () => { 
        setIsOpenMenu(!isOpenMenu)
        window.open('/cv.pdf', '_blank') 
    }

    return (
        <HeaderStyled blur={isOnScrollPosition}>
            <Section main css={{ width: '100%' }}>
                <Row align="center">
                    <LogoContainerStyled span={2}>
                        <img src="./logo3.png" alt="logo" width={40} />
                    </LogoContainerStyled>
                    <MenuContainerStyled>
                        <MobileMenuButtonStyled md={0}  onClick={() => setIsOpenMenu(!isOpenMenu)}>
                            <Text color="white" size="1.2rem" css={{ display: 'inline-flex', padding: '$sm' }}>
                                { isOpenMenu ? <FiX size={30} /> : <FiMenu size={30} /> }
                            </Text>
                        </MobileMenuButtonStyled>
                        <MobileMenuContainerStyled open={isOpenMenu} md={0}>
                            <MobileMenuGridStyled>
                                {
                                    MENU_ITEMS.map(({ name, href }) => 
                                        <Text size="1.2rem" key={name} css={{ padding: '$sm' }}onClick={() => setIsOpenMenu(!isOpenMenu)}>
                                            <MenuLinksStyled mobile href={href}>
                                                {name}
                                            </MenuLinksStyled>
                                        </Text>
                                    )
                                }
                                {
                                    MENU_LINKS.map(({ name, icon, href }) => 
                                        <Text size="1.2rem" css={{
                                            ...desktopMenuItemsStyles,
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '$sm'
                                        }} key={name} onClick={() => setIsOpenMenu(!isOpenMenu)}>
                                            <MenuLinksStyled mobile href={href} target="_blank" rel="noreferer">
                                                {icon}
                                            </MenuLinksStyled>
                                        </Text>
                                    )
                                }
                                <ResumeButtonStyled auto rounded onClick={downloadCV}>
                                    Descargar CV
                                </ResumeButtonStyled>
                            </MobileMenuGridStyled>
                        </MobileMenuContainerStyled>
                        <DesktopMenuContainerStyled xs={0} md={12}>
                            {
                                MENU_ITEMS.map(({ name, href }) => 
                                    <Text css={desktopMenuItemsStyles} size="1.2rem" key={name}>
                                        <MenuLinksStyled href={href}>
                                            {name}
                                        </MenuLinksStyled>
                                    </Text>
                                )
                            }
                            {
                                MENU_LINKS.map(({ name, icon, href }) => 
                                    <Text css={{
                                            ...desktopMenuItemsStyles,
                                            display: 'flex',
                                            alignItems: 'center',
                                        }} size="1.2rem" key={name}>
                                        <MenuLinksStyled href={href} target="_blank" rel="noreferer">
                                            {icon}
                                        </MenuLinksStyled>
                                    </Text>
                                )
                            }
                            <ResumeButtonStyled auto rounded onClick={downloadCV}>
                                Descargar CV
                            </ResumeButtonStyled>
                        </DesktopMenuContainerStyled>
                    </MenuContainerStyled>
                </Row>
            </Section>
        </HeaderStyled>
    )
}

export default Header