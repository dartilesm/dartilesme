import { styled } from "@nextui-org/react"
import Image from "next/image"

export const sectionStyles = {
    height: 'calc(100vh - 60px)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '60px',
    '@smMax': {
        flexDirection: 'column-reverse',

    }
}

export const StyledWelcomePresentation = styled('div', {
    maxWidth: '500px',
    "@mdMax": {
        padding: "$xl 0"
    }
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
    background: '#011829',
    aspectRatio: '1 / 1',
    width: '300px',
    height: '300px',
    bottom: 0,
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
})

export const StyledImage = styled(Image, {
    clipPath: 'ellipse(44% 49.5% at 50% 50%)',
    width: '400px',
    height: '400px',
    zIndex: 1,
    objectFit: 'cover'
})