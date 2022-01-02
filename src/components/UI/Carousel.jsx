import { useEffect } from "react";
import styles from './ui.module.css';

const Carousel = ({items = []}) => {

    return <>
        <div className={styles.carousel}>
            {
                items.map(item => {
                    return <div className={styles.carouselItem}>
                        {item}
                    </div>
                })
            }
        </div>
    </>
}

export default Carousel