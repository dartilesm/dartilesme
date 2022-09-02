import { styled } from '@nextui-org/react'

const SectionStyled = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1040px',
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
    margin: 'auto',
    '@mdMax': {
        padding: '0 $md'
    },
    '@smMax': {
        flexDirection: 'column',
    },
    '@xsMax': {
        maxWidth: '100%',
        width: 'calc(100vw - $12)',
    },
})

const Section = ({ children, css, as = "section" }) => <SectionStyled css={css} as={as}>{children}</SectionStyled>

export default Section