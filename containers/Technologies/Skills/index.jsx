import { StyledSkill, StyledTechnology, StyledTechnologyName } from "./styles";

const Skills = ({ list }) => <>
    {
        list.map(({ icon, name }) => <StyledSkill key={name}>
            <StyledTechnology>
                { icon }
                <StyledTechnologyName>
                    { name }
                </StyledTechnologyName>
            </StyledTechnology>
        </StyledSkill>)
    }
</>

export default Skills