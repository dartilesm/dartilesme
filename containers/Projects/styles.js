import { Grid, styled } from "@nextui-org/react";

export const StyledGridContainer = styled(Grid.Container, {
    minHeight: '400px',
    '@xsMax': {
        minHeight: '300px'
    }
})