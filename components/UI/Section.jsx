import { styled } from '@nextui-org/react'
import { forwardRef } from 'react'

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

const Section = forwardRef(({ children, css, as = "section" }, ref) => <SectionStyled css={css} as={as} ref={ref}>{children}</SectionStyled>)

export default Section