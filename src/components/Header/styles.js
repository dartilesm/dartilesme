import { Button, Col, Grid, Link, styled, StyledText } from "@nextui-org/react"

export const StyledHeader = styled(Grid, {
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

export const StyledLogoContainer = styled(Col, {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    height: '100%',
    padding: '$xs 0'
})

export const StyledMenuContainer = styled(Col, {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'column'
})

export const StyledMobileMenuButton = styled(Grid, {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    top: 0,
    right: 0,
    zIndex: 1,
})

export const StyledMobileMenuContainer = styled(Grid, {
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

export const StyledMobileMenuGrid = styled(Grid, {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    overflowY: 'auto',
    padding: '$xs 0',
})

export const StyledDesktopMenuContainer = styled(Grid, {
    display: 'flex',
    alignItems: 'center',
})

export const StyledDesktopMenuItems =  styled(StyledText, {
    cursor: 'pointer',
    padding: '$sm',
    borderRadius: '10px',
    transition: 'all .5s ease',
    display: 'flex',
    alignItems: 'center',
    color: '#8193b2'
})

export const StyledMenuLinks = styled(Link, {
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

export const StyledResumeButton = styled(Button, {
    margin: '0 1rem'
})