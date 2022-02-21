import { Grid, styled } from "@nextui-org/react";
import { Text } from "../../../components/UI";

export const StyledSkill = styled(Grid, {
    marginBottom: '$md'
})

export const StyledTechnology = styled(Grid, {
    position: 'relative',
    borderRadius: '14px 14px 0px 0px',
    backgroundColor: '#010126',
})

export const StyledTechnologyName = styled(Text, {
    fontFamily: 'inherit',
    fontSize: '$base',
    padding: '$0',
    color: 'white',
    position:' absolute',
    left:' 0',
    margin:' 0',
    textAlign:' center',
    width:' 100%',
    backgroundColor:' #051c44',
    borderRadius:' 0px 0px 14px 14px' 
})