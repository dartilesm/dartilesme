import { styled } from "@nextui-org/react";
import Divider from "./Divider";


const commomStyles = {
    display: 'inline-flex',
    backgroundClip: 'text',
    boxDecorationBreak: 'clone',
    textFillColor: 'transparent',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    '-webkit-box-decoration-break': 'clone',
    '-moz-background-clip': 'text',
    '-moz-text-fill-color': 'transparent',
    '-moz-box-decoration-break': 'clone',
    fontWeight: '$extrabold',
    lineHeight: '$sm',
    letterSpacing: '$normal',
    padding: '0 0 $12',
}

const TitleStyled = styled('h2', {
    background: 'linear-gradient(-70deg, #db469f 0%, #2188ff 100%)',
    fontSize: 'calc($xl + $4xl)',
    ...commomStyles,
    '@smMax': {
        fontSize: '$xl',
        padding: '0 0 $sm'
    },
    '@xsMax': {
        fontSize: 'calc($md + $md)',
        padding: '0 0 $xs'
    },
})


const MainTitleStyled = styled('h1', {
    background: 'linear-gradient(-70deg, #3bf0e4 0%, #bca1f7 100%)',
    fontSize: 'calc($md + $5xl)',
    ...commomStyles,
    '@smMax': {
        fontSize: 'calc($sm + $lg)',
        padding: '$md 0 $xs',
        lineHeight: '$xs'
    },
    '@xsMax': {
        fontSize: 'calc($md + $base)',
        padding: '0 0 $xs'
    },
})

const Title = ({ children, main, css }) => <>
    { !main && <Divider /> }
    { !main ? <TitleStyled css={css}>{children}</TitleStyled> : <MainTitleStyled css={css}>{children}</MainTitleStyled> }
</>

export default Title