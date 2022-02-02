import { Text as NextUIText } from '@nextui-org/react'

const textStyles = {
    color: '$textPrimary',
    fontSize: 'calc($tiny + $xs)',
    fontWeight: '$normal',
    letterSpacing: '$normal',
    paddingBottom: '$10',
    margin: 0,
    '@mdMax': {
        fontSize: 'calc($lg - $base)',
        paddingBottom: '$10'
    },
    '@smMax': {
        fontSize: '$base',
        paddingBottom: '$md'
    }
}


const Text = ({ children, className = '', css = {}, ...props }) => {

    return <NextUIText {...props} className={`${className}`} css={{...textStyles, ...css}}>
        {children}
    </NextUIText>
}

export default Text