import { styled } from '@nextui-org/react'

const SectionStyled = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1040px',
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
    margin: 'auto',
    '@smMax': {
        flexDirection: 'column'
    },
    '@xsMax': {
        maxWidth: '100%',
        width: 'calc(100vw - $12)'
    },
    variants: {
        main: {
            true: {
                maxWidth: '1200px',
                padding: 0,
                '@mdMax': {
                    padding: '0 $md'
                }
            }
        }
    }
})

const Section = ({ children, main, css }) => <SectionStyled main={main} css={css}>{children}</SectionStyled>

export default Section