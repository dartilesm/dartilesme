import { styled } from '@nextui-org/react'

const Divider = styled('div', {
    width: '$18',
    height: '$3',
    borderRadius: '$sm',
    background: 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)',
    margin: '$18 0 $16 0',
    '@smMax': {
        margin: '$16 0 $12 0'
    },
    '@xsMax': {
        margin: '$12 0 $8 0',
        height: '$2'
    }
})

export default Divider