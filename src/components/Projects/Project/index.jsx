import { Button, Col, Grid, Link, Row, Spacer, Text } from "@nextui-org/react"
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import styles from './index.module.css'


const Project = ({ name, description, urlProject, urlCode, technologies, image }) => {
    const openUrl = (url) => {
        window.open(url, '_blank')
    }

    return <>
        <Row justify="center">
            <Col span={4} className={styles.projectInfoContainer}>
                <Spacer y={16} />
                <Grid className={styles.projectInfo}>
                    <Text h3 color="#efe">{name}</Text>
                    <Text small color="warning">{technologies}</Text>
                    <Text color="#b6b6b6" blockquote>{description}</Text>
                    <Grid className={styles.buttonContainer}>
                        {
                            urlProject && <Button onClick={() => openUrl(urlProject)} rounded color="primary" auto iconRight={<FiExternalLink />}> 
                                Ir al sitio
                            </Button>
                        }
                        { 
                            urlCode && <Link href={urlCode} color="#efe"> 
                                <FiGithub size={20}/>
                            </Link>
                        }
                    </Grid>
                </Grid>
            </Col>
            <Col className={styles.projectImage} style={{ "--imageUrl": `url(${image})` }}>
            </Col>
        </Row>
    </>
}

export default Project