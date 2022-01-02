import Divider from "./Divider";
import styles from './ui.module.css'

const Title = ({ children, main }) => <>
    { !main && <Divider /> }
    {
        !main ? <h2 className={`${styles.title} ${main ? styles.main : ''}`}>
            {children}
        </h2> : <h1 className={`${styles.title} ${main ? styles.main : ''}`}>
            {children}
        </h1>
    }
</>

export default Title