import { styled } from '@nextui-org/react'

const SubtitleStyled = styled('h3', {
    display: 'inline-flex',
    fontSize: 'calc($base + $xs)',
    lineHeight: '$xs',
    letterSpacing: '$normal',
    background: 'linear-gradient(0deg, #3bf0e4 0%, #bca1f7 100%)',
    backgroundClip: 'text',
    boxDecorationBreak: 'clone',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    '-webkit-box-decoration-break': 'clone',
    '-moz-background-clip': 'text',
    '-moz-text-fill-color': 'transparent',
    '-moz-box-decoration-break': 'clone',
    padding: '0 0 $12',
    '@smMax': {
        fontSize: '$md',
        padding: '0 0 $10'
    },
    '@xsMax': {
        fontSize: 'calc($lg - $xs)',
    }
})

const Subtitle = ({ children }) => <SubtitleStyled>
    {children}
</SubtitleStyled>

export default Subtitle