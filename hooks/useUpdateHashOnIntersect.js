import { useContext, useEffect, useRef } from "react";
import { HashRouterContext } from "../context/hashRouter";
import useIntersectionObserver from "./useIntersectionObserver";


function useUpdateHashOnIntersect({ hash }) {
    const elementRef = useRef();
    const onScreen = useIntersectionObserver(elementRef, { threshold: .6, rootMargin: '76px 0px 0px 0px' });
    const { setHashLocation } = useContext(HashRouterContext)

    useEffect(() => {
        if (onScreen) {
            setHashLocation(hash)
        }
    }, [onScreen])

    return [elementRef]
}

export default useUpdateHashOnIntersect