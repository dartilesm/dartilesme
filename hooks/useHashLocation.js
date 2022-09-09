import { useEffect, useState } from "react";
import { useRouter } from "next/router"


function useHashLocation() {
    const router = useRouter()
    const [hashLocation, setHashLocation] = useState(router.asPath.replace('#', ''));

    useEffect(() => {
        // this function is called whenever the hash changes
        const handler = () => setHashLocation(router.asPath.replace('#', ''));

        // subscribe to hash changes
        window.addEventListener("hashchange", handler);
        return () => window.removeEventListener("hashchange", handler);
    }, []);

    return [hashLocation, setHashLocation];
};

export default useHashLocation