import NextLink from "next/link"
import { Button, Link, Navbar, Spacer, Dropdown } from "@nextui-org/react";
import { useContext } from "react";
import { FiExternalLink } from "react-icons/fi";
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import { HashRouterContext } from "../../../context/hashRouter";
import { Text } from "../../UI";
import { StyledLogoContainer } from "../styles";
import { useRouter } from "next/router";

const Menu = ({ links, items }) => {
    const t = useTranslations('menu')
    const {hashLocation} = useContext(HashRouterContext)
    const { locale, locales, route } = useRouter()

    return (
          <Navbar disableScrollHandler variant='sticky' maxWidth="fluid" css={{
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
                <Image src="/assets/logo.webp" alt='logo' width={40} height={40} />
              </StyledLogoContainer>              
            </Navbar.Brand>
            <Navbar.Content enableCursorHighlight hideIn='sm' variant='highlight-rounded'>
              {
                items.map((item) => (
                  <Navbar.Link
                    isActive={hashLocation === item.href.replace('#', '')}
                    href={item.href}
                    key={item.name}
                  >{t(item.name)}</Navbar.Link>
                ))
              }
            </Navbar.Content>
            <Navbar.Content>
              {
                links.map((item) => <Navbar.Link key={item.name} hideIn='sm' color='inherit' href={item.href} target="_blank"> {item.icon} </Navbar.Link>)
              }
              <Navbar.Item show='sm' hideIn='xs'>
                <Button auto rounded as={Link} href='cv.pdf' iconRight={<FiExternalLink color="inherit" />}>
                  {t('buttonText')}
                </Button>
              </Navbar.Item>
              <Navbar.Item>
                <Dropdown>
                  <Dropdown.Button flat color="primary" css={{ tt: "capitalize" }}>
                    {t(`languages.${locale}`)}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    aria-label="Single selection actions"
                    color="primary"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={locale}
                    css={{ $$dropdownMenuMinWidth: "100px" }}
                  >
                    {
                      locales.map(_locale => {
                        return <Dropdown.Item key={_locale}>
                        <NextLink href={route} locale={_locale} passHref scroll={false}>
                          <Link css={{ display: 'block', width: "100%" }}>
                            {t(`languages.${_locale}`)}
                          </Link>
                        </NextLink>
                      </Dropdown.Item>
                      })
                    }
                  </Dropdown.Menu>
                </Dropdown>
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
                {
                  items.map((item) => (
                    <Navbar.CollapseItem as="span" key={item.href}>
                      <Link
                        color='inherit'
                        css={{
                          width: "100%",
                        }}
                        href={item.href}
                      >
                        {t(item.name)}
                      </Link>
                    </Navbar.CollapseItem>
                  ))
                }
                <Navbar.CollapseItem as="span">
                  <Button css={{marginTop: "$xs"}} auto rounded as={Link} href='cv.pdf' iconRight={<FiExternalLink color="inherit" />}>
                    {t('buttonText')}
                  </Button>
                </Navbar.CollapseItem>
              </li>
              <li>
                <Text>{t('socialText')}</Text>
                {
                  links.map((item) => (
                    <Navbar.CollapseItem as="span" key={item.href}>
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
                  ))
                }
              </li>
            </Navbar.Collapse>
          </Navbar>
      );
}

export default Menu