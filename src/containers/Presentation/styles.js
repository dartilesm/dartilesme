import { styled } from "@nextui-org/react"

export const sectionStyles = {
    height: 'calc(100vh - 100px)',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    '@smMax': {
        flexDirection: 'column-reverse',
        
    }
}

export const StyledWelcomePresentation = styled('div', {
    maxWidth: '500px'
})

export const StyledImageContainer = styled('div', {
    height: '400px',
    width: '400px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
})

export const StyledImageBackground = styled('div', {
    borderRadius: '50%',
    background: '#060609',
    aspectRatio: '1 / 1',
    width: '300px',
    height: '300px',
    bottom: 0,
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
})

export const StyledImage = styled('img', {
    clipPath: 'ellipse(42% 46%)',
    width: '400px',
    height: '400px',
    zIndex: 1,
    objectFit: 'cover'
})