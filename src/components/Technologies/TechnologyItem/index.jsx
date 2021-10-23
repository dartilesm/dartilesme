import { Grid, Text } from '@nextui-org/react'
import styles from './index.module.css'

const TechnologyItem = ({ icon, name }) => <Grid className={styles.technology}>
    { icon }
    <Text p color="white">
        { name }
    </Text>
</Grid>

export default TechnologyItem