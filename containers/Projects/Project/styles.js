import { Link, styled, StyledCol, StyledGridItem, StyledRow } from "@nextui-org/react"
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

export const ProjectInfoContainerStyled = styled(StyledCol, {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    width: '50%',
    maxWidth: '50%',
    '@xsMax': {
        width: '100%',
        maxWidth: '100%',
        marginTop: '$10'
    }
})

export const ProjectInfoStyled = styled(StyledGridItem, {
    position: 'relative',
    zIndex: 1,
    maxWidth: '100%',
    width: '100%',
    height: 'auto'
})

export const ProjectImage = styled(StyledCol, {
    position: 'relative',
    borderRadius: '$sm',
    padding: '$md',
    height: '300px',
    maxHeight: '$60',
    maxWidth: '$80',
    width: '100%',
    '&::before': {
        content: '',
        backgroundColor: 'transparent',
        backgroundImage: '$$backgroundImage',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
    },
    '@smMax': {
        maxWidth: '$60'
    }
})

export const ProjectButtonContainerStyled = styled(StyledGridItem, {
    width: '80%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    padding: 0,
    zIndex: 1,
    marginTop: '$10',
    gap: '$12'
})

export const ProjectLinkStyled = styled(Link, {
    color: '#efe',
    display: 'flex',
    lineHeight: '$md',
    justifyContent: 'center',
})

export const StyledProjectContainer = styled(StyledRow, {
    justifyContent: 'space-between',
    margin: '$20 0',
    '&:first-child': {
        marginTop: 0
    },
    variants: {
        reverse: {
            true: {
                flexDirection: 'row-reverse',
                '@xsMax': {
                    flexDirection: 'column-reverse',
                }
            }
        }
    },
    '@smMax': {
        alignItems: 'center'
    },
    '@xsMax': {
        flexDirection: 'column-reverse',
        alignItems: 'center'
    },
})