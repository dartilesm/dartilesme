import { Button, Link } from "@nextui-org/react"
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { useTranslations } from 'next-intl';
import { ProjectButtonContainerStyled, ProjectImage, ProjectInfoContainerStyled, ProjectInfoStyled, ProjectLinkStyled, StyledProjectContainer, StyledProjectInfo } from "./styles"

const Project = ({ project, reverse }) => {
    const t = useTranslations('projects')

    return <>
        <StyledProjectContainer reverse={reverse}>
            <ProjectInfoContainerStyled>
                <ProjectInfoStyled>
                    <StyledProjectInfo>{project.name}</StyledProjectInfo>
                    <StyledProjectInfo type="technology">{project.technologies}</StyledProjectInfo>
                    <StyledProjectInfo type="description">{t(`projectDescriptions.${project.description}`)}</StyledProjectInfo>
                    <ProjectButtonContainerStyled>
                        {
                            project.urlProject && <Link href={project.urlProject} target="_blank">
                                <Button rounded color="primary" iconRight={<FiExternalLink />} > 
                                    {t('ctaText')}
                                </Button>
                            </Link>
                        }
                        { 
                            project.urlCode && <ProjectLinkStyled href={project.urlCode} target="_blank" rel="noreferrer"> 
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