import { Col, Grid } from "@nextui-org/react";
import styles from './index.module.css'

const ImageCover = ({ src = 'https://grupoact.com.ar/wp-content/uploads/2020/04/placeholder.png' }) => (
    <Grid className={styles.imageCover} style={{ backgroundImage: `url(${src})`}}>
        <Col className={styles.backdrop}></Col>
    </Grid>
)

export default ImageCover