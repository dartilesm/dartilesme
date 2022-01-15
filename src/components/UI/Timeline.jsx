import { Card } from '@nextui-org/react'
import { Subtitle } from '.'
import styles from './ui.module.css'

const Timeline = ({ items = [] }) => <div className={styles.timeline}>
        {
            items.map(([eventName, data], index) => {
                return <div>
                    <Subtitle className={styles.timelineEvent}>{eventName}</Subtitle>
                    <div className={styles.timelineCards}>
                        {
                            data.map(event => {
                                return <Card className={styles.timelineCard}>
                                    {
                                        event.title && <Card.Header className={styles.timelineCardHeader}>
                                            { event.title }
                                        </Card.Header>
                                    }
                                    <Card.Body>
                                        { event.content || '' }
                                    </Card.Body>
                                    {
                                        event.footer && <Card.Footer>
                                            { event.footer }
                                        </Card.Footer>
                                    }
                                </Card>
                            })
                        }
                    </div>
                </div>
            })
        }
    </div>

export default Timeline