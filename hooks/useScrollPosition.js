import { useEffect, useState } from "react"

const useScrollPosition = ({ scrollPos } = { }) => {
    const [scrollPosition, setScrollPosition] = useState(scrollPos)
    const [isOnScrollPosition, setIsOnScrollPosition] = useState(false)
    
    useEffect(() => {
        window.addEventListener('scroll', handleScrollPosition)
        return () => window.removeEventListener('scroll', handleScrollPosition)
      }, [scrollPosition, isOnScrollPosition])
    
    const handleScrollPosition = () => {
        const isOnDefinedScrollPosition = window.scrollY >= scrollPosition
        if (isOnDefinedScrollPosition === isOnScrollPosition) return
        setIsOnScrollPosition(isOnDefinedScrollPosition)
    }

    return [isOnScrollPosition, setScrollPosition]
}

export default useScrollPosition