import { Button, Col, Grid, Link, Row, Spacer } from "@nextui-org/react"
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { Text } from "../../UI"
import styles from './index.module.css'


const Project = ({ name, description, urlProject, urlCode, technologies, image }) => {
    const openUrl = (url) => {
        window.open(url, '_blank')
    }

    return <>
        <Row align="center">
            <Col className={styles.projectInfoContainer}>
                <Spacer y={16} />
                <Grid className={styles.projectInfo}>
                    <Text color="rgba(255, 255, 255, 0.5)" css={{paddingBottom: 0, fontWeight: 600}}>{name}</Text>
                    <Text size={20} color="warning" css={{paddingBottom: 0}}>{technologies}</Text>
                    <Text size={20} color="#b6b6b6" b css={{paddingBottom: 0, lineHeight: 1.5}}>{description}</Text>
                    <Grid className={styles.buttonContainer}>
                        {
                            urlProject && <Button onClick={() => openUrl(urlProject)} rounded color="primary" iconRight={<FiExternalLink />}> 
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