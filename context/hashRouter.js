import { createContext } from "react";
import useHashLocation from "../hooks/useHashLocation";

export const HashRouterContext = createContext()

export function HashRouterProvider({ children }) {
    const [hashLocation, setHashLocation] = useHashLocation()

    return <HashRouterContext.Provider value={{ hashLocation, setHashLocation }}>
        {children}
    </HashRouterContext.Provider>
}