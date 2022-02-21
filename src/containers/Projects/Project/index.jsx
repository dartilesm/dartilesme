import { Button, Row, Spacer } from "@nextui-org/react"
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { ProjectButtonContainerStyled, ProjectImage, ProjectInfoContainerStyled, ProjectInfoStyled, ProjectLinkStyled, StyledProjectInfo } from "./styles"

const Project = ({ name, description, urlProject, urlCode, technologies, image }) => {
    const openUrl = (url) => {
        window.open(url, '_blank')
    }

    return <>
        <Row align="center">
            <ProjectInfoContainerStyled>
                <Spacer y={16} />
                <ProjectInfoStyled>
                    <StyledProjectInfo>{name}</StyledProjectInfo>
                    <StyledProjectInfo type="technology">{technologies}</StyledProjectInfo>
                    <StyledProjectInfo type="description">{description}</StyledProjectInfo>
                    <ProjectButtonContainerStyled>
                        {
                            urlProject && <Button onClick={() => openUrl(urlProject)} rounded color="primary" iconRight={<FiExternalLink />}> 
                                Ir al sitio
                            </Button>
                        }
                        { 
                            urlCode && <ProjectLinkStyled href={urlCode}> 
                                <FiGithub size={20}/>
                            </ProjectLinkStyled>
                        }
                    </ProjectButtonContainerStyled>
                </ProjectInfoStyled>
            </ProjectInfoContainerStyled>
            <ProjectImage css={{ $$backgroundImage: `url(${image})` }}>
            </ProjectImage>
        </Row>
    </>
}

export default Project