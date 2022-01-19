import { Button, Col, Grid, Link, Row, Spacer, styled } from "@nextui-org/react"
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { Text } from "../../../components/UI"

const projectNameStyle = {
    paddingBottom: 0, 
    fontWeight: 600, 
    color: 'rgba(255, 255, 255, 0.5)'
}

const projectTechnologyStyle = {
    paddingBottom: 0, 
    color: '$warning', 
    fontSize: 20
}

const projectDescriptionStyle = {
    paddingBottom: 0,
    lineHeight: '$md',
    color: '#b6b6b6',
    fontSize: 20
}

const ProjectInfoContainerStyled = styled(Col, {
    display: 'flex',
    alignItems: 'flex-end',
})

const ProjectInfoStyled = styled(Grid, {
    position: 'absolute',
    zIndex: 1,
    maxWidth: '100%',
    width: '50%',
    height: '100%',
    minHeight: '300px',
    '@smMax': {
        width: '60%'
    },
    '@xsMax': {
        width: '80%'
    }
})

const ProjectImage = styled(Col, {
    position: 'relative',
    borderRadius: '$sm',
    padding: '$md',
    border: '$light solid rgba(156, 156, 156, .9)',
    minHeight: '$60',
    maxWidth: '$80',
    '&::before': {
        content: '',
        backgroundImage: '$$backgroundImage',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
    },
    '&::after': {
        content: '',
        backgroundColor: '#01011bde',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%'
    }
})

const ProjectButtonContainerStyled = styled(Grid, {
    width: '80%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    padding: 0,
    zIndex: 1,
})

const ProjectLinkStyled = styled(Link, {
    color: '#efe',
    margin: '$12',
    display: 'flex',
    lineHeight: '$md',
    justifyContent: 'center',
})

const Project = ({ name, description, urlProject, urlCode, technologies, image }) => {
    const openUrl = (url) => {
        window.open(url, '_blank')
    }

    return <>
        <Row align="center">
            <ProjectInfoContainerStyled>
                <Spacer y={16} />
                <ProjectInfoStyled>
                    <Text css={projectNameStyle}>{name}</Text>
                    <Text css={projectTechnologyStyle}>{technologies}</Text>
                    <Text b css={projectDescriptionStyle}>{description}</Text>
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