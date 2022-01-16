import { forwardRef } from 'react'
import styles from './index.module.css'

const MainBackground = forwardRef(({ sticky }, ref) => <div ref={ref} className={`${styles.mainBackground} ${sticky ? styles.sticky : ''}`}>
    <div className={styles.firstBackground}/>
</div>) 

export default MainBackground