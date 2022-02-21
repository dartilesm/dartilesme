import { styled } from '@nextui-org/react'
import { forwardRef } from 'react'

const StyledBackground = styled('div', {
    position: 'absolute',
    top: '100vh',
    left: '0',
    width: '100%',
    height: 'calc(100% - 100vh)',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    variants: {
        sticky: {
            true: {
                '& div': {
                    position: 'fixed'
                }
            }
        }
    },
    '& div': {
        position: 'absolute',
        height: 'calc(100vh + 500px)',
        top: '100px',
        width: '80%',
        background: 'radial-gradient(ellipse at 20% 50%, rgb(60 28 75) 0%, transparent 70%, transparent 100%)',
        '@mdMax': {
            background: 'radial-gradient(ellipse at 20% 50%, rgb(60 28 75) 0%, transparent 68%, transparent 100%)'
        },
        '@smMax': {
            background: 'radial-gradient(ellipse at 30% 50%, rgb(60 28 75) 0%, transparent 70%, transparent 100%)'
        },
        '@xsMax': {
            background: 'radial-gradient(ellipse at 0% 50%, rgb(60 28 75) 0%, transparent 70%, transparent 100%)'
        }
    }
})

const MainBackground = forwardRef(({ sticky }, ref) => <StyledBackground ref={ref} sticky={sticky}> <div /> </StyledBackground>)

export default MainBackground