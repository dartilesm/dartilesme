import { Button, Col, Grid, Link, styled } from "@nextui-org/react"

export const HeaderStyled = styled(Grid, {
    display: 'flex',
    alignItems: 'center',
    height: '70px',
    minHeight: '50px',
    width: '100vw',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1000',
    backgroundColor: '#010126',
    boxShadow: '0px 2px 18px rgb(1, 1, 38)',
	'-webkit-box-shadow': '0px 2px 18px rgb(1, 1, 38)',
	'-moz-box-shadow': '0px 2px 18px rgb(1, 1, 38)',
    variants: {
        blur: {
            true: {
                backgroundColor: '#01012699',
                backdropFilter: 'blur(5px)',
                '-webkitBackdrop-filter': 'blur(10px)',
            }
        }
    }
})

export const LogoContainerStyled = styled(Col, {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    height: '100%',
    padding: '$xs 0'
})

export const MenuContainerStyled = styled(Col, {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'column'
})

export const MobileMenuButtonStyled = styled(Grid, {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    top: 0,
    right: 0,
    zIndex: 1,
})

export const MobileMenuContainerStyled = styled(Grid, {
    padding: 'calc($18 + $xs) 0',
    height: '100vh',
    top: '0',
    position: 'fixed',
    backgroundColor: '#010126',
    right: '0',
    zIndex: '0',
    transition: 'all .5s ease',
    display: 'flex',
    overflowY: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    transform: 'translateX(100%)',
    variants: {
        open: {
            true: {
                transform: 'translateX(0%)'
            }
        }
    }
})

export const MobileMenuGridStyled = styled(Grid, {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    overflowY: 'auto',
    padding: '$xs 0',
})

export const DesktopMenuContainerStyled = styled(Grid, {
    display: 'flex',
    alignItems: 'center',
})

export const desktopMenuItemsStyles =  {
    cursor: 'pointer',
    padding: '$sm',
    borderRadius: '10px',
    transition: 'all .5s ease',
    display: 'flex',
    alignItems: 'center',
    color: '#8193b2'
}

export const MenuLinksStyled = styled(Link, {
    color: '#8193b2 !important',
    '&:hover': {
        color: '#efefef !important',
        transform: 'scale(103%)'
    },
    variants: {
        mobile: {
            true: {
                color: 'white !important'
            }
        }
    }
})

export const ResumeButtonStyled = styled(Button, {
    margin: '0 1rem'
})