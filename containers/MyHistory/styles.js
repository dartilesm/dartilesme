import { styled, Tooltip } from "@nextui-org/react";

export const StyledTooltip = styled(Tooltip, {
    display: 'inline'
})

export const boldTextStyle = {
    display: 'inline',
    color: '$warning', 
    paddingBottom: 0,
    fontSize: 'inherit',
    lineHeight: 'inherit',
    fontWeight: 600,
    '@smMax': {
        paddingBottom: 0,
    },
    '@mdMax': {
        paddingBottom: 0
    }
}

export const collapseGroupStyle = {
    padding: 0
}

export const collapseStyle = {
    background: 'linear-gradient(90deg, rgb(4 2 2) 0%, rgba(7, 25, 63, 1) 100%) !important',
    '.nextui-collapse-title-content': {
        h3: {
            background: '-webkit-linear-gradient(-70deg, #3bf0e4 0%, #bca1f7 100%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            '-webkit-box-decoration-break': 'clone',
        },
        div: {
            color: '#8193b2'
        }
    }
}

export const defaultTextStyle = {
    color: '$white', 
    fontSize: 18
}