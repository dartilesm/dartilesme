import { Text as NextText } from '@nextui-org/react'
import styles from './ui.module.css'

const Text = ({ children, className = '', size, color, css, ...props }) => {
    const textStyle = {
        lineHeight: '40px',
        fontWeight: 400,
        letterSpacing: '1px',
        paddingBottom: '24px',
        margin: 0,
        '@smMax': {
            fontSize: '16px',
            lineHeight: '24px',
            paddingBottom: '16px'
        },
        '@mdMax': {
            fontSize: '22px',
            lineHeight: '32px',
            paddingBottom: '24px'
        },
        ...css,
    }

    return <NextText size={size ?? 26} color={color || 'rgba(255, 255, 255, 0.5)'} {...props} className={`${styles.text} ${className}`} css={textStyle}>
        {children}
    </NextText>
}

export default Text