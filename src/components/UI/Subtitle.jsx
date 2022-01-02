import styles from './ui.module.css'

const Subtitle = ({ children, className = '' }) => <h3 className={`${styles.subtitle} ${className}`}>
    {children}
</h3>

export default Subtitle