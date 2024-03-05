import { useMediaQuery } from "react-responsive";

const useMobileViewMediaQuery = () => useMediaQuery({ query: "(max-width: 480px)" })
const useDesktopViewMediaQuery = () => useMediaQuery({ query: "(min-width: 481px)" });

export const Mobile = ({ children }) => {
    const isMobileView = useMobileViewMediaQuery();
    return isMobileView ? children : null
}

export const Desktop = ({ children }) => {
    const isDesktopView = useDesktopViewMediaQuery();
    return isDesktopView ? children : null
}
