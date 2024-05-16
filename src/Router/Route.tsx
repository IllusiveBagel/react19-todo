    import { useContext } from "react";
    import { NavigationContext } from "./Router";

    interface RouteProps {
        children: React.ReactNode;
        href: string;
    }

    const Route = ({ children, href }: RouteProps) => {
        const navObj = useContext(NavigationContext);

        const copy = { ...navObj };

        switch (copy.pathname) {
            case href:
                return children;
            default:
                return null;
        }
    };

    export default Route;
