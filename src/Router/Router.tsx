import React, { useState, useEffect } from 'react';

interface RouterProps {
    children: React.ReactNode;
}

interface NavigationContextValue {
    pathname: string;
    navigate: (newPathname: string) => void;
}

const NavigationContext = React.createContext<NavigationContextValue | null>(null);

const Router = ({ children }: RouterProps) => {
    const [pathname, setPathname] = useState(window.location.pathname);

    useEffect(() => {
        const onPopState = () => setPathname(window.location.pathname);
        window.onpopstate = onPopState;
        return () => {
            window.onpopstate = null;
        };
    }, []);

    const navigate = (newPathname: string) => {
        setPathname(newPathname);
        window.history.pushState('', '', newPathname);
    };

  return (
    <NavigationContext.Provider value={{ pathname, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export {Router, NavigationContext};