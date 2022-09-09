import { useEffect, useState } from "react";

function currentLocation() {
    return window.location.hash;
};

function useHashLocation() {
    const [hashLocation, setHashLocation] = useState(currentLocation());

    useEffect(() => {
        // this function is called whenever the hash changes
        const handler = () => setHashLocation(currentLocation());

        // subscribe to hash changes
        window.addEventListener("hashchange", handler);
        return () => window.removeEventListener("hashchange", handler);
    }, []);

    return [hashLocation, setHashLocation];
};

export default useHashLocation