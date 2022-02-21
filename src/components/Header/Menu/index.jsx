import { Link } from "@nextui-org/react";
import { useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import Logo from '../../../assets/logo.png';
import { Text } from "../../UI";
import {
  StyledDesktopMenuContainer,
  StyledDesktopMenuItems,
  StyledLogoContainer,
  StyledMenuContainer,
  StyledMenuLinks,
  StyledMobileMenuButton,
  StyledMobileMenuContainer,
  StyledMobileMenuGrid,
  StyledResumeButton
} from "../styles";

const MenuLinks = ({ links, mobile, onItemClick }) => {
    return <>
        {
            links.map(({ name, icon, href }) => (
                <StyledDesktopMenuItems
                size='1.2rem'
                css={{
                    display: "flex",
                    alignItems: "center",
                    padding: "$sm",
                }}
                key={name}
                onClick={onItemClick}
                >
                <StyledMenuLinks mobile={mobile} href={href} target='_blank' rel='noreferer'>
                    {icon}
                </StyledMenuLinks>
                </StyledDesktopMenuItems>
            ))
        }
    </>
}
const MenuItems = ({ items, mobile, onItemClick }) => {
    return <>
        {
            items.map(({ name, href }) => <Text onClick={onItemClick} css={{ padding: "$sm", fontSize: '1.2rem' }}>
            <StyledMenuLinks mobile={mobile} href={href}>
                {name}
            </StyledMenuLinks>
        </Text>)
        }
    </>
}


const Menu = ({ links, items }) => {
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)
    const downloadCV = () => { 
        setIsOpenMobileMenu(!isOpenMobileMenu)
        window.open('/cv.pdf', '_blank') 
    }
    return (
        <>
          <StyledLogoContainer span={2}>
            <img src={Logo} alt='logo' width={40} />
          </StyledLogoContainer>
          <StyledMenuContainer>
            <StyledMobileMenuButton md={0} onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}>
              <Text
                color='white'
                size='1.2rem'
                css={{ display: "inline-flex", padding: "$sm", cursor: "pointer" }}
              >
                {isOpenMobileMenu ? <FiX size={30} /> : <FiMenu size={30} />}
              </Text>
            </StyledMobileMenuButton>
            <StyledMobileMenuContainer open={isOpenMobileMenu} md={0}>
              <StyledMobileMenuGrid>
                <MenuItems items={items} mobile onItemClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)} />                
                <MenuLinks links={links} mobile onItemClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)} />
                <Link href="cv.pdf" download onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}>
                    <StyledResumeButton rounded iconRight={<FiDownload color="white" />}>
                      Descargar CV
                    </StyledResumeButton>
                </Link>
              </StyledMobileMenuGrid>
            </StyledMobileMenuContainer>
            <StyledDesktopMenuContainer xs={0} md={12}>
                <MenuItems items={items} onItemClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)} />
                <MenuLinks links={links} onItemClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)} />
                <Link href="cv.pdf" download onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}>
                  <StyledResumeButton rounded iconRight={<FiDownload color="white" />}>
                    Descargar CV
                  </StyledResumeButton>
                </Link>
            </StyledDesktopMenuContainer>
          </StyledMenuContainer>
        </>
      );
}

export default Menu