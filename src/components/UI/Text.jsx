import { Text as NextText } from '@nextui-org/react'
import styles from './ui.module.css'

const Text = ({ children, className = '', size, color, css, ...props }) => {
    const textStyle = {
        lineHeight: size ? `${size * 1.5}px` : '40px',
        fontSize: size || '26px',
        fontWeight: 400,
        letterSpacing: '0px',
        paddingBottom: '24px',
        margin: 0,
        '@mdMax': {
            fontSize: size ? `${size}px` : '22px',
            lineHeight: size ? `${size * 1.5}px` : '32px',
            paddingBottom: '24px'
        },
        '@smMax': {
            fontSize: size ? `${size * .8}px` : '16px',
            lineHeight: size ? `${size * 1.3}px` : '24px',
            paddingBottom: '16px'
        },
        ...css,
    }

    return <NextText color={color || '#8193b2'} {...props} className={`${styles.text} ${className}`} css={textStyle}>
        {children}
    </NextText>
}

export default Text