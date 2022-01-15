import styles from './ui.module.css'

const Section = ({ children, main, className = '' }) => <section className={`${styles.section} ${main ? styles.main : ''} ${className}`}>{children}</section>

export default Section