import { Button } from "@nextui-org/react"
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { ProjectButtonContainerStyled, ProjectImage, ProjectInfoContainerStyled, ProjectInfoStyled, ProjectLinkStyled, StyledProjectContainer, StyledProjectInfo } from "./styles"

const Project = ({ project, reverse }) => {
    const openUrl = (url) => {
        window.open(url, '_blank')
    }

    return <>
        <StyledProjectContainer reverse={reverse}>
            <ProjectInfoContainerStyled>
                <ProjectInfoStyled>
                    <StyledProjectInfo>{project.name}</StyledProjectInfo>
                    <StyledProjectInfo type="technology">{project.technologies}</StyledProjectInfo>
                    <StyledProjectInfo type="description">{project.description}</StyledProjectInfo>
                    <ProjectButtonContainerStyled>
                        {
                            project.urlProject && <Button onClick={() => openUrl(project.urlProject)} rounded color="primary" iconRight={<FiExternalLink />}> 
                                Ir al sitio
                            </Button>
                        }
                        { 
                            project.urlCode && <ProjectLinkStyled href={project.urlCode}> 
                                <FiGithub size={20}/>
                            </ProjectLinkStyled>
                        }
                    </ProjectButtonContainerStyled>
                </ProjectInfoStyled>
            </ProjectInfoContainerStyled>
            <ProjectImage css={{ $$backgroundImage: `url(${project.image})` }}>
            </ProjectImage>
        </StyledProjectContainer>
    </>
}

export default Project