import { Link, Navbar, Button } from "@nextui-org/react";
import { useState } from "react";
import { Text } from "../../UI";
import Logo from '../../../assets/logo.png';
import {
  StyledDesktopMenuItems, StyledLogoContainer, StyledMenuLinks
} from "../styles";
import { FiExternalLink } from "react-icons/fi";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { Spacer } from "@nextui-org/react";

// const MenuLinks = ({ links, onItemClick }) => {
//     return <>
//         {
//             links.map(({ name, icon, href }) => (
//                 <StyledDesktopMenuItems
//                 size='1.2rem'
//                 css={{
//                     display: "flex",
//                     alignItems: "center",
//                     padding: "$sm",
//                 }}
//                 key={name}
//                 onClick={onItemClick}
//                 >
//                 <StyledMenuLinks href={href} target='_blank' rel='noreferer'>
//                     {icon}
//                 </StyledMenuLinks>
//                 </StyledDesktopMenuItems>
//             ))
//         }
//     </>
// }
// const MenuItems = ({ items, mobile, onItemClick }) => {
//     return <>
//         {
//             items.map(({ name, href }) => <Text onClick={onItemClick} css={{ padding: "$sm", fontSize: '1.2rem' }}>
//             <StyledMenuLinks href={href}>
//                 {name}
//             </StyledMenuLinks>
//         </Text>)
//         }
//     </>
// }


const Menu = ({ links, items }) => {
  const isSmallDevice = useMediaQuery("(max-width: 960px)")

    return (
          <Navbar shouldHideOnScroll={!isSmallDevice} disableScrollHandler variant='sticky' maxWidth="fluid" css={{
              margin: 'auto', 
              background: '$backgroundAlpha',
              backdropFilter: 'saturate(180%) blur(10px)',
              '@smMax': {
                background: 'transparent',
                backdropFilter: 'none',
              }
          }} containerCss={{
            padding: 0,
            maxWidth: 1040,
            margin: 'auto',
            '@sm': {
              background: 'transparent !important',
              backdropFilter: 'none !important',
            },
            '@mdMax': {
              padding: '0 $md',
              maxWidth: '960px'
            },
            '@smMax': {
              padding: '0 $12'
            }
          }}>
            <Navbar.Brand css={{ gap: '$5' }}>
              <Navbar.Toggle aria-label='toggle navigation' showIn='sm' />
              <StyledLogoContainer css={{ margin: '0'}}>
                <img src={Logo} alt='logo' width={40} />
              </StyledLogoContainer>              
            </Navbar.Brand>
            <Navbar.Content enableCursorHighlight hideIn='sm' variant='highlight-rounded'>
              {
                items.map((item, index) => (
                  <Navbar.Link href={item.href}>{item.name}</Navbar.Link>
                ))
              }
            </Navbar.Content>
            <Navbar.Content>
              {
                links.map((item) => <Navbar.Link key={item.name} hideIn='sm' color='inherit' href={item.href} target="_blank"> {item.icon} </Navbar.Link>)
              }
              <Navbar.Item>
                <Button auto rounded as={Link} href='cv.pdf' iconRight={<FiExternalLink color="inherit" />}>
                  Resume
                </Button>
              </Navbar.Item>
            </Navbar.Content>
            <Navbar.Collapse css={{
              background: '$backgroundAlpha',
              backdropFilter: 'saturate(180%) blur(10px)',
              ul: {
                padding: '$8 $12',
                height: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column'
              }
            }}>
              <li>
              {items.map((item) => (
                <Navbar.CollapseItem disableAnimation={false} as="span" key={item.href}>
                  <Link
                    color='inherit'
                    css={{
                      width: "100%",
                    }}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                </Navbar.CollapseItem>
              ))}
              </li>
              <li>
                <Text>Descubre mis redes sociales</Text>
                {links.map((item) => (
                  <Navbar.CollapseItem disableAnimation={false} as="span" key={item.href}>
                    <Link
                      color='inherit'
                      css={{
                        minWidth: "100%",
                        display: "flex",
                        alignItems: "center"
                      }}
                      href={item.href}
                      target="_blank"
                    >
                        {item.icon}
                      <Spacer x={1} />
                        {item.name}
                    </Link>
                  </Navbar.CollapseItem>
                ))}
              </li>
            </Navbar.Collapse>
          </Navbar>
      );
}

export default Menu