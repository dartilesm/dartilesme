import { Col, Grid, Link, styled } from "@nextui-org/react"
import { Text } from "../../../components/UI"

export const StyledProjectInfo = styled(Text, {
    fontFamily: 'inherit',
    paddingBottom: 0, 
    fontWeight: 600, 
    color: 'rgba(255, 255, 255, 0.5)',
    variants: {
        type: {
            technology: {
                fontWeight: 'normal',
                paddingBottom: 0, 
                color: '$warning', 
                fontSize: 20
            },
            description: {
                fontWeight: 'normal',
                paddingBottom: 0,
                lineHeight: '$md',
                color: '#b6b6b6',
                fontSize: 20
            }
        }
    }
})

export const ProjectInfoContainerStyled = styled(Col, {
    display: 'flex',
    alignItems: 'flex-end',
})

export const ProjectInfoStyled = styled(Grid, {
    position: 'absolute',
    zIndex: 1,
    maxWidth: '100%',
    width: '50%',
    height: '100%',
    minHeight: '300px',
    '@smMax': {
        width: '60%'
    },
    '@xsMax': {
        width: '80%'
    }
})

export const ProjectImage = styled(Col, {
    position: 'relative',
    borderRadius: '$sm',
    padding: '$md',
    border: '$light solid rgba(156, 156, 156, .9)',
    minHeight: '$60',
    maxWidth: '$80',
    '&::before': {
        content: '',
        backgroundImage: '$$backgroundImage',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
    },
    '&::after': {
        content: '',
        backgroundColor: '#01011bde',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%'
    }
})

export const ProjectButtonContainerStyled = styled(Grid, {
    width: '80%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    padding: 0,
    zIndex: 1,
})

export const ProjectLinkStyled = styled(Link, {
    color: '#efe',
    margin: '$12',
    display: 'flex',
    lineHeight: '$md',
    justifyContent: 'center',
})